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



var btn = document.getElementById("dark-theme-button");
var link = document.getElementById("theme-link");
btn.addEventListener("click", function () { ChangeTheme(); });
function ChangeTheme()
{
    let lightTheme = "./style.css";
    let darkTheme = "./dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "light";

    if(currTheme == lightTheme)
    {
        currTheme = darkTheme;
        theme = "dark";
    }
    else
    {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}


const links = document.getElementById('languageButton');



let language = localStorage.getItem('currentLanguage') || 'ru';

links.addEventListener('click', function (event) {
    event.preventDefault();
    language = language === 'ru' ? 'en' : 'ru';

    getTranslate();
});

function getTranslate() {
    localStorage.setItem('currentLanguage', language);

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        const translationKey = element.dataset.i18n;

        if (i18n.hasOwnProperty(language) && i18n[language].hasOwnProperty(translationKey)) {
            element.textContent = i18n[language][translationKey];
        }
    });
}


const i18n = {
    'en': {
        'navHome': 'book a demo',
        'technology': 'Technology',
        'aboutUs': 'About Us',
        'impact': 'Impact',
        'portfolio': 'Portfolio',
        'blog': 'Blog',
        'bookADemo': 'Book a demo',
        'connectingTheCurb': 'Connecting the curb to new insights',
        'toNewInsights': 'to new insights',
        'realTimeCurbData': 'Real-time curb data for smart cities. Measure occupancy, analyze demand, and manage curb space with the right tools.'
    },
    'ru': {
        'navHome': 'Забронировать демонстрацию',
        'technology': 'Технологии',
        'aboutUs': 'О нас',
        'impact': 'Влияние',
        'portfolio': 'Портфель',
        'blog': 'Блог',
        'bookADemo': 'Забронировать демонстрацию',
        'connectingTheCurb': 'Связь бордюра с новыми идеями',
        'toNewInsights': 'к новым идеям',
        'realTimeCurbData': 'Реальные данные о бордюре для умных городов. Измеряйте загрузку, анализируйте спрос и управляйте местами у бордюра с правильными инструментами.'
    }
};
