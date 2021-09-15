import createGalleryMarkup from './create-gallery-markup.js';
import showAllert from './show-allert.js';
import getRefs from './get-refs';
const refs = getRefs();

export default class Pagination {
  constructor(apiService) {
    this.totalPages = 2000;
    this.page = 1;
    this.apiService = apiService;
  }

  loadNewPage(page) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.page = page;
    if (this.apiService.query !== '')
      this.apiService.findMovies(undefined, page).then(createGalleryMarkup).catch(showAllert);
    else if (this.apiService.genre)
      this.apiService
        .fetchMoviesByGenre(undefined, page)
        .then(createGalleryMarkup)
        .catch(showAllert);
    else this.apiService.getTrendingMovies(page).then(createGalleryMarkup).catch(showAllert);
  }

  createPagination(page = this.apiService.page, totalPages = this.apiService.totalPages) {
    let liTag = '';
    let activeLi;
    let beforePage = page - 1; // 5-1=4
    let afterPage = page + 1; //5+1=6

    if (page > 1) {
      //if page value is geater than 1 then add new li which is  the previous btn
      liTag += `<li class="pagination_item btn_pgn next" onclick="newPagination.loadNewPage(${
        page - 1
      })"><span><i class="fas fa-arrow-left"></i></i></span></li>`;
    }

    if (page > 2) {
      //if page value is less than 2 then add 1 after the previous button
      liTag += `<li class="pagination_item first numb" onclick="newPagination.loadNewPage(1)"><span>1</span></li>`;
      if (page > 3) {
        //if page value is greater than 3 then add this (...) after the first li or page
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }
    // how many pages or li show before the current li
    if (page == totalPages) {
      beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
    }
    // how many pages or li show after the current li
    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        //if plength is greater than totalPage length then continue
        continue;
      }
      if (plength == 0) {
        //if plength is 0 than add +1 in plength value
        plength = plength + 1;
      }
      if (page == plength) {
        //if page is equal to plength than assign active string in the active variable
        activeLi = 'active';
      } else {
        //else leave empty to the active variable
        activeLi = '';
      }

      liTag += `<li class="pagination_item numb ${activeLi}" onclick="newPagination.loadNewPage(${plength})"><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) {
      //if page value is less than totalPage value by -1 then show the last li or page
      if (page < totalPages - 2) {
        //if page value is less than totalPage value by -2 then add this (...) before the last li or page
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="pagination_item last numb" onclick="newPagination.loadNewPage(${totalPages})"><span>${totalPages}</span></li>`;
    }
    if (page < totalPages) {
      //show the next button if the page value is less than totalPage(20)
      liTag += `<li class="pagination_item btn_pgn back" onclick="newPagination.loadNewPage(${
        page + 1
      })"><span><i class="fas fa-arrow-right"></i></i></span></li>`;
    }
    refs.ulTag.innerHTML = liTag; //add li tag inside ul tag
    return liTag; //reurn the li tag
  }
}
