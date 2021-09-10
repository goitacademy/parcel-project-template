let openFilmId = 'hi';
export const OPEN_NOW = 'themeNow';

export default function addIdToLocalSt(idQuery) {
    openFilmId = idQuery;
    localStorage.setItem('OpenNow', openFilmId);
}
