chrome.contextMenus.create({
	title: "Translate '%s'",
	contexts: ["selection"],
	onclick: function translate(info) {
		chrome.tabs.query({ active: true }, function (tabs) {
			chrome.tabs.create({
				index: tabs[0].index + 1,
				url: 'http://translate.google.com.au/#auto/#/' + encodeURIComponent(info.selectionText)
			});
		});
	}
});
