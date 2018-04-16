const ALL_LANGUAGES = [
    { code: 'af', name: 'Afrikaans' },
    { code: 'sq', name: 'Albanian' },
    { code: 'am', name: 'Amharic' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hy', name: 'Armenian' },
    { code: 'az', name: 'Azeerbaijani' },
    { code: 'eu', name: 'Basque' },
    { code: 'be', name: 'Belarusian' },
    { code: 'bn', name: 'Bengali' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'ca', name: 'Catalan' },
    { code: 'ceb', name: 'Cebuano' },
    { code: 'ny', name: 'Chichewa' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'zh-TW', name: 'Chinese (Traditional)' },
    { code: 'co', name: 'Corsican' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'nl', name: 'Dutch' },
    { code: 'en', name: 'English' },
    { code: 'eo', name: 'Esperanto' },
    { code: 'et', name: 'Estonian' },
    { code: 'tl', name: 'Filipino' },
    { code: 'fi', name: 'Finnish' },
    { code: 'fr', name: 'French' },
    { code: 'fy', name: 'Frisian' },
    { code: 'gl', name: 'Galician' },
    { code: 'ka', name: 'Georgian' },
    { code: 'de', name: 'German' },
    { code: 'el', name: 'Greek' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ht', name: 'Haitian Creole' },
    { code: 'ha', name: 'Hausa' },
    { code: 'haw', name: 'Hawaiian' },
    { code: 'iw', name: 'Hebrew' },
    { code: 'hi', name: 'Hindi' },
    { code: 'hmn', name: 'Hmong' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'is', name: 'Icelandic' },
    { code: 'ig', name: 'Igbo' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ga', name: 'Irish' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'jw', name: 'Javanese' },
    { code: 'kn', name: 'Kannada' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'km', name: 'Khmer' },
    { code: 'ko', name: 'Korean' },
    { code: 'ku', name: 'Kurdish (Kurmanji)' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'lo', name: 'Lao' },
    { code: 'la', name: 'Latin' },
    { code: 'lv', name: 'Latvian' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lb', name: 'Luxembourgish' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'ms', name: 'Malay' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'mt', name: 'Maltese' },
    { code: 'mi', name: 'Maori' },
    { code: 'mr', name: 'Marathi' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'my', name: 'Myanmar (Burmese)' },
    { code: 'ne', name: 'Nepali' },
    { code: 'no', name: 'Norwegian' },
    { code: 'ps', name: 'Pashto' },
    { code: 'fa', name: 'Persian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'ro', name: 'Romanian' },
    { code: 'ru', name: 'Russian' },
    { code: 'sm', name: 'Samoan' },
    { code: 'gd', name: 'Scots Gaelic' },
    { code: 'sr', name: 'Serbian' },
    { code: 'st', name: 'Sesotho' },
    { code: 'sn', name: 'Shona' },
    { code: 'sd', name: 'Sindhi' },
    { code: 'si', name: 'Sinhala' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'so', name: 'Somali' },
    { code: 'es', name: 'Spanish' },
    { code: 'su', name: 'Sundanese' },
    { code: 'sw', name: 'Swahili' },
    { code: 'sv', name: 'Swedish' },
    { code: 'tg', name: 'Tajik' },
    { code: 'ta', name: 'Tamil' },
    { code: 'te', name: 'Telugu' },
    { code: 'th', name: 'Thai' },
    { code: 'tr', name: 'Turkish' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'ur', name: 'Urdu' },
    { code: 'uz', name: 'Uzbek' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'cy', name: 'Welsh' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'yi', name: 'Yiddish' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'zu', name: 'Zulu' }
];
function getSelectedLanguages() {
    const languages = [];
    const langDivs = document.getElementsByClassName('lang');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < langDivs.length; i++) {
        const langDiv = langDivs[i];
        const checkBox = langDiv.getElementsByTagName('input')[0];
        const label = langDiv.getElementsByTagName('label')[0];
        if (checkBox.checked) {
            languages.push({ code: checkBox.value, name: label.textContent || '' });
        }
    }
    return languages;
}
function onCheckChanged() {
    const languages = getSelectedLanguages();
    const hint = document.getElementById('hint');
    if (languages.length > 1) {
        hint.style.display = 'block';
    }
    else {
        hint.style.display = 'none';
    }
}
function createLanguageOption(lang, checked) {
    const langDiv = document.createElement('div');
    langDiv.className = 'lang';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.value = lang.code;
    checkBox.checked = checked;
    checkBox.onclick = () => { onCheckChanged(); };
    langDiv.appendChild(checkBox);
    const label = document.createElement('label');
    label.textContent = lang.name;
    langDiv.appendChild(label);
    return langDiv;
}
// Saves options to chrome.storage
function save_options() {
    const newTabCheck = document.getElementById('new-tab');
    const languages = getSelectedLanguages();
    chrome.storage.sync.set({
        newTab: newTabCheck.checked ? 'true' : 'false',
        languages: JSON.stringify(languages)
    }, () => {
        // reload extension
        chrome.runtime.reload();
        const status = document.getElementById('save-status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
            status.textContent = '';
            window.close();
        }, 750);
    });
}
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        newTab: 'false',
        languages: '[]'
    }, (items) => {
        // resue tab
        const newTab = items.newTab === 'true';
        const newTabCheck = document.getElementById('new-tab');
        newTabCheck.checked = newTab;
        // langs
        const languages = JSON.parse(items.languages);
        const langsDiv = document.getElementById('langs');
        let groupDiv;
        for (let i = 0; i < ALL_LANGUAGES.length; i++) {
            if (i % 16 === 0) {
                groupDiv = document.createElement('div');
                langsDiv.appendChild(groupDiv);
            }
            const lang = ALL_LANGUAGES[i];
            const checked = languages.find((l) => l.code === lang.code) !== undefined;
            const div = createLanguageOption(lang, checked);
            groupDiv.appendChild(div);
        }
        onCheckChanged();
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
const saveButton = document.getElementById('save');
saveButton.addEventListener('click', save_options);
