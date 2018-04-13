// Google Analytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// Create GA tracker
ga('create', 'UA-73153112-5', 'auto');

// Add context menu
chrome.contextMenus.create({
  title: `Translate "%s"`,
  contexts: ['selection'],
  onclick: function translate(info) {
    chrome.storage.sync.get({
      lang: 'en',
    }, function (items) {
      // Create new Tab
      chrome.tabs.query({
        active: true
      }, function (tabs) {
        chrome.tabs.create({
          index: tabs[0].index + 1,
          url: `http://translate.google.com/#auto/${items.lang}/${encodeURIComponent(info.selectionText)}`
        });
      });
    });
    // @see: http://stackoverflow.com/a/22152353/1958200
    ga('set', 'checkProtocolTask', function () { });
    ga('require', 'displayfeatures');
    ga('send', 'pageview', '/');
  }
});
