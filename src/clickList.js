(() => {
    const refs = {
        leftBtn: document.querySelector('[data-modal-left]'),
        rightBtn: document.querySelector('[data-modal-right]'),
        mainFoto: document.querySelector('[data-img-change]'),
        modal: document.querySelectorAll('[data-img]'),
    };
  let n=0;
    refs.leftBtn.addEventListener('click', leftClick);
    refs.rightBtn.addEventListener('click', rightClick);
  
    function leftClick() {
        n-=1;
      if(0<=n && n<refs.modal.length){
        refs.mainFoto.src=refs.modal[n].src;
        addClass(n);
      }else{
          n=refs.modal.length-1;
          refs.mainFoto.src=refs.modal[n].src;
          addClass(n);
      }
    }
    function rightClick() {
        n+=1;
        if(0<=n && n<refs.modal.length){
            refs.mainFoto.src=refs.modal[n].src;
            addClass(n);
        }else{
            n=0;
            refs.mainFoto.src=refs.modal[n].src;
            addClass(n);
        }
    }
    function addClass(n){
        for(let i=0;i<refs.modal.length;i++){
            refs.modal[i].classList.add('my-border-white');
            refs.modal[i].classList.remove('my-border');
        }
        refs.modal[n].classList.add('my-border');
    }
  })();