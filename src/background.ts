let tabId: number | undefined;

function createNewTab(url: string) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    chrome.tabs.create({
      index: tabs[0].index + 1,
      url
    }, (tab) => {
      tabId = tab.id;
      chrome.tabs.onRemoved.addListener(() => { tabId = undefined; });
    });
  });
}

function onTransClick(info: chrome.contextMenus.OnClickData, lang: string) {
  const url = `http://translate.google.com/#auto/${lang}/${encodeURIComponent(info.selectionText!)}`;
  if (tabId !== undefined) {
    chrome.tabs.update(tabId, { active: true, url }, (tab) => {
      if (tab) {
        chrome.windows.update(tab.windowId, { focused: true });
      } else {
        createNewTab(url);
      }
    });
  } else {
    createNewTab(url);
  }
  // @see: http://stackoverflow.com/a/22152353/1958200
  ga('set', 'checkProtocolTask', () => { /* do nothing */ });
  ga('require', 'displayfeatures');
  ga('send', 'pageview', '/');
}

chrome.storage.sync.get({
  languages: '[]'
}, (items) => {
  const languages = JSON.parse(items.languages) as Lang[];
  const single: boolean = languages.length === 1;
  languages.forEach((lang) => {
    // Add context menu
    chrome.contextMenus.create({
      title: single ? `Translate "%s" to ${lang.name}` : `To ${lang.name}`,
      contexts: ['selection'],
      onclick: (info) => {
        onTransClick(info, lang.code);
      }
    });
  });

  chrome.contextMenus.create({
    title: `Translate Options...`,
    contexts: single ? ['page'] : ['page', 'selection'],
    onclick: () => {
      chrome.runtime.openOptionsPage();
    }
  });

});
