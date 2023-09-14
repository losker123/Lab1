const languageButton = document.getElementById('languageButton');
let currentLanguage = 'RU';

languageButton.addEventListener('click', () => {
    if (currentLanguage === 'RU') {
        document.documentElement.lang = 'ru';
        currentLanguage = 'EN';
    } else {
        document.documentElement.lang = 'en';
        currentLanguage = 'RU';
    }
    languageButton.textContent = currentLanguage;
});