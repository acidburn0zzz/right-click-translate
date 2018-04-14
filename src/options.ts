// Saves options to chrome.storage
function save_options() {

  const sel = document.getElementById('lang') as HTMLSelectElement;
  const code = sel.value;
  const name = sel.options[sel.selectedIndex].text;

  if (code !== null) {
    const languages: Lang[] = [
      { code, name }
    ];
    chrome.storage.sync.set({
      languages: JSON.stringify(languages)
    }, () => {
      // reload extension
      chrome.runtime.reload();
      window.close();
    });
  }
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      languages: JSON.stringify(DEFAULT_LANGS)
    },
    (items) => {
      const languages = JSON.parse(items.languages) as Lang[];
      const sel = document.getElementById('lang') as HTMLSelectElement;
      sel.value = languages[0].code;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
const saveButton = document.getElementById('save') as HTMLButtonElement;
saveButton.addEventListener('click', save_options);
