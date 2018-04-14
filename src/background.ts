function ontransclick(info: chrome.contextMenus.OnClickData, lang: string) {
  // Create new Tab
  chrome.tabs.query({
    active: true
  }, (tabs) => {
    chrome.tabs.create({
      index: tabs[0].index + 1,
      url: `http://translate.google.com/#auto/${lang}/${encodeURIComponent(info.selectionText!)}`
    });
  });
  // @see: http://stackoverflow.com/a/22152353/1958200
  ga('set', 'checkProtocolTask', () => { /* do nothing */ });
  ga('require', 'displayfeatures');
  ga('send', 'pageview', '/');
}

chrome.storage.sync.get({
  languages: JSON.stringify(DEFAULT_LANGS)
}, (items) => {
  const languages = JSON.parse(items.languages) as Lang[];
  languages.forEach((lang) => {
    // Add context menu
    chrome.contextMenus.create({
      title: `Translate "%s" to ${lang.name}`,
      contexts: ['selection'],
      onclick: (info) => {
        ontransclick(info, lang.code);
      }
    });
  });
});
