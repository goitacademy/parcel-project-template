import API from'./js/fetchCountries.js'
//==========================================
import debounce from 'lodash.debounce'
//==========================================
import cardCountrie from './template/countries.hbs'
import countriesList from './template/countries-list.hbs'
//==========================================
import './scss/main.scss'

const refs = {
    card: document.querySelector('.card'),
    searchForm: document.querySelector('.search-form'),
}


refs.searchForm.addEventListener('input', debounce(onSearch,1000))


function onSearch(e) {
    API.fetchCountryByName(e.target.value)
        .then(renderCountryCard)
        .catch(error => console.log(error));
    
    if (!e.target.value.trim()) {
        clearMarkup();
        return
    }
    
}

//Рендер розметки страни
function renderCountryCard(countries) {
    if (countries.length > 10) {
        clearMarkup()
    } else if (countries.length <= 10 && countries.length > 1) {
        clearMarkup()
        let markup = countriesList(countries);
        refs.card.innerHTML = markup;
            
    } else if (countries.length === 1) {
        countries.map(country => {
            clearMarkup()
            let markup = cardCountrie(country);
            refs.card.innerHTML = markup;
        });
    } else {
        clearMarkup()
        noResult()
    }
};



function clearMarkup() {
    refs.card.innerHTML = '';
}



function noResult() {
  alert('Too many matches found. Please enter a more specific query!')
}