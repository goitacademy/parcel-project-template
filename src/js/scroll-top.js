window.onload = ()  => {
    window.onscroll =  function(e) {
        let winY  = window.scrollY;
        if (winY > 300) {
            //progress bar
            progressBar();

            scrollBarAnimation();

            winY = null;
        }
    };

const scrollBtn = document.querySelector('.isShowBtn');
window.onscroll =() => {
    if(window.scrollY  > 700) {
        scrollBtn.classList.remove('isShowBtn_show');
    } else if (window.scrollY  < 700) {
        scrollBtn.classList.add('isShowBtn_show');
    }
  };

  scrollBtn.onclick = () => {
      window.scrollTo(0, 0);
  };
};  