addIdToLocalSt.js
let openArr = '';
export const OPEN_NOW = 'themeNow';

export default function addIdToLocalSt(idQuery) {
    openArr = idQuery;
    localStorage.setItem('OpenNow', openArr);
}
