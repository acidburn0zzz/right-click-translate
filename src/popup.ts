const googleUrl = 'https://translate.google.com/';
const developersUrl = 'https://github.com/ericvan76/right-click-translate';
const donateUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J6L73EGZWXR4L';

const googleMenu = document.getElementById('google') as HTMLAnchorElement;
const optionsMenu = document.getElementById('options') as HTMLAnchorElement;
const devMenu = document.getElementById('developers') as HTMLAnchorElement;
const issueMenu = document.getElementById('issues') as HTMLAnchorElement;
const donateBtn = document.getElementById('donate') as HTMLAnchorElement;

optionsMenu.addEventListener('click', () => chrome.runtime.openOptionsPage());
googleMenu.addEventListener('click', () => chrome.tabs.create({ url: googleUrl }));
devMenu.addEventListener('click', () => chrome.tabs.create({ url: developersUrl }));
issueMenu.addEventListener('click', () => chrome.tabs.create({ url: `${developersUrl}/issues` }));
donateBtn.addEventListener('click', () => chrome.tabs.create({ url: donateUrl }));
