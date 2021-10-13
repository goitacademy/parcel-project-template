import refs from '../refs.js';
const { spinerContainer } = refs;

const spiner = {
    show() {
         spinerContainer.classList.remove("hidden");
         console.log(show);
    },
    hide() {
        spinerContainer.classList.add("hidden");
        console.log(hide);
    }
}

spiner.show(); 