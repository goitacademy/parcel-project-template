const loadMoreBtnLabelRef = document.querySelector('.label');
const spinner = document.querySelector('.spinner');
const loadMoreBtn = document.querySelector('.load-more-btn');

const loadMoreButton = {
    enable(){
        loadMoreBtn.disabled = false;
        loadMoreBtnLabelRef.textContent = 'Load More';
        spinner.classList.add('is-hidden')
    },

    disable(){
        loadMoreBtn.disabled = true;
        loadMoreBtnLabelRef.textContent = 'Load...';
        spinner.classList.remove('is-hidden')

    },

    show() {
        loadMoreBtn.classList.remove('is-hidden');
    },

    hide(){
       loadMoreBtn.classList.add('is-hidden');
    }
};

export default loadMoreButton;