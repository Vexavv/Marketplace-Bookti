const monthNamesUk = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
];

const monthNamesEn = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

type LangType = 'uk' | 'en';

export const getRegistrationDate = (date: string) => {
    const lang = localStorage.getItem('language') as LangType;

    const dateParts = date.split('-');
    const year = dateParts[0];
    const month = dateParts[1];

    const monthName =
        lang === 'uk'
            ? monthNamesUk[parseInt(month) - 1]
            : monthNamesEn[parseInt(month) - 1];
    const result = `${monthName} ${year}`;

    return result;
};
