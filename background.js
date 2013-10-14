chrome.contextMenus.create({
	title : "Translate '%s'",
	contexts : ["selection"],
	onclick : function translate(info) {
		chrome.tabs.create({
			url : 'http://translate.google.com.au/#auto/#/' + encodeURIComponent(info.selectionText)
		});
	}
});
