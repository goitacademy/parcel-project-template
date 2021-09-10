import { apiService } from '../index';
import getRefs from './get-refs';
const refs = getRefs();

class Pagination {
  constructor() {
    this.totalPages = 2000;
    this.page = 1;
  }

  createPagination(totalPages, page) {
    let liTag = '';
    let activeLi;
    let beforePage = page - 1; // 5-1=4
    let afterPage = page + 1; //5+1=6

    if (page > 1) {
      //if page value is geater than 1 then add new li which is  the previous btn
      liTag += `<li class="pagination_item btn_pgn next" onclick="newPagination.createPagination(newPagination.totalPages, ${
        page - 1
      })"><span><i class="fas fa-arrow-left"></i></i></span></li>`;
    }

    if (page > 2) {
      //if page value is less than 2 then add 1 after the previous button
      liTag += `<li class="pagination_item first numb" onclick="newPagination.createPagination(newPagination.totalPages, 1)"><span>1</span></li>`;
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

      liTag += `<li class="pagination_item numb ${activeLi}" onclick="newPagination.createPagination(newPagination.totalPages, ${plength})"><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) {
      //if page value is less than totalPage value by -1 then show the last li or page
      if (page < totalPages - 2) {
        //if page value is less than totalPage value by -2 then add this (...) before the last li or page
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="pagination_item last numb" onclick="newPagination.createPagination(newPagination.totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }
    if (page < totalPages) {
      //show the next button if the page value is less than totalPage(20)
      liTag += `<li class="pagination_item btn_pgn back" onclick="newPagination.createPagination(newPagination.totalPages, ${
        page + 1
      })"><span><i class="fas fa-arrow-right"></i></i></span></li>`;
    }
    refs.ulTag.innerHTML = liTag; //add li tag inside ul tag
    return liTag; //reurn the li tag
  }
}

//новый экземпляр
const newPagination = new Pagination();
//calling function with passing parameters and adding inside element which is ul tag
newPagination.createPagination(2000, 1);
window.newPagination = newPagination;

//1 Метод получения списка популярных фильмов для первой страницы:
// apiService.getTrendingMovies().then(createGalleryMarkup).catch(console.log);
// По запросу приходят 20 популярных фильмов за неделю, при том, что общее количество страниц 1000 ("total_pages":1000,"total_results":20000)
// По этому нужно выводить, к примеру, 20 страниц фильмов,
//а) рандомных популярных фильмов за неделю (это проще)
//б) рейтинг ("popularity": значение ключа объекта) которых самый высокий
// 1.1 nextPageBtn: document.querySelector('.next')
// refs.nextPageBtn.addEventListener('click', getNext20Films );
// function getNext20Films(event) {this.incrementPage();}
// incrementPage(){ apiService.page += 1;}
// 1.2 numbPageBtn: document.querySelector('.numb');
// refs.numbPageBtn.addEventListener('click', getFilmsOnNumbPage());
// getFilmsOnNumbPage(){if(newPagination.page == apiService.page ==){отрисовывать карточки с этими фильмами}}
