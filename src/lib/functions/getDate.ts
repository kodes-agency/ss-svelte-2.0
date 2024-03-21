export function getDate(date: Date, locale: string) {
    const months = [
        {
            id: 1,
            en: 'January',
            de: 'Januar',
            bg: 'Януари'
        }, 
        {
            id: 2,
            en: 'February',
            de: 'Februar',
            bg: 'Февруари'
        },
        {
            id: 3,
            en: 'March',
            de: 'März',
            bg: 'Март'
        },
        {
            id: 4,
            en: 'April',
            de: 'April',
            bg: 'Април'
        },
        {
            id: 5,
            en: 'May',
            de: 'Mai',
            bg: 'Май'
        },
        {
            id: 6,
            en: 'June',
            de: 'Juni',
        },
        {
            id: 7,
            en: 'July',
            de: 'Juli',
            bg: 'Юли'
        },
        {
            id: 8,
            en: 'August',
            de: 'August',
            bg: 'Август'
        },
        {
            id: 9,
            en: 'September',
            de: 'September',
            bg: 'Септември'
        },
        {
            id: 10,
            en: 'October',
            de: 'Oktober',
            bg: 'Октомври'
        },
        {
            id: 11,
            en: 'November',
            de: 'November',
            bg: 'Ноември'
        },
        {
            id: 12,
            en: 'December',
            de: 'Dezember',
            bg: 'Декември'
        }
    ]



    var year = date.getFullYear();
  
    var month = (1 + date.getMonth());
    month = months[month - 1][locale];
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + ' ' + month + ' ' + year;
  }

export function getYear(date: string | Date | number) {
    return new Date(date).getFullYear();
}