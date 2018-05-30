const developersUrl = 'https://github.com/ericvan76/right-click-translate';

let menu = document.getElementById('options') as HTMLAnchorElement;
menu.addEventListener('click', () => chrome.runtime.openOptionsPage());

menu = document.getElementById('developers') as HTMLAnchorElement;
menu.addEventListener('click', () => chrome.tabs.create({ url: developersUrl }));

menu = document.getElementById('issues') as HTMLAnchorElement;
menu.addEventListener('click', () => chrome.tabs.create({ url: `${developersUrl}/issues` }));
