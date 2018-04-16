let newTab: boolean;
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
  if (!newTab && tabId !== undefined) {
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
  newTab: 'false',
  languages: '[]'
}, (items) => {
  newTab = items.newTab === 'true';
  const languages = JSON.parse(items.languages) as Lang[];
  languages.forEach((lang) => {
    // Add context menu
    chrome.contextMenus.create({
      title: languages.length === 1 ? `Translate "%s" to ${lang.name}` : `To ${lang.name}`,
      contexts: ['selection'],
      onclick: (info) => {
        onTransClick(info, lang.code);
      }
    });
  });

  if (languages.length > 1) {
    chrome.contextMenus.create({
      type: 'separator',
      contexts: ['selection']
    });
  }

  if (languages.length !== 1) {
    chrome.contextMenus.create({
      title: languages.length === 0 ? 'Translate Options...' : 'More...',
      contexts: ['selection'],
      onclick: () => {
        chrome.runtime.openOptionsPage();
      }
    });
  }

  chrome.contextMenus.create({
    title: 'Translate Options...',
    contexts: ['page'],
    onclick: () => {
      chrome.runtime.openOptionsPage();
    }
  });

});
