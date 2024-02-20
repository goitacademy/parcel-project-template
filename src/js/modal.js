(() => {
    function contains(selector, text) {
      var elements = document.querySelectorAll(selector);
      return Array.prototype.filter.call(elements, function(element){
        return RegExp(text).test(element.textContent);
      });
    }

    const refs = {
      openModalBtn1a: contains('button', 'Buy now')[0],
      openModalBtn1b: contains('button', 'Buy now')[1],
      closeModalBtn1: document.querySelector("[data-modal-close1]"),
      modal1: document.querySelector("[data-modal1]"),

      openModalBtn2: contains('button', 'Leave a review')[0],
      closeModalBtn2: document.querySelector("[data-modal-close2]"),
      modal2: document.querySelector("[data-modal2]"),

      openModalBtn3: contains('button', 'Subscribe')[0],
      closeModalBtn3: document.querySelector("[data-modal-close3]"),
      modal3: document.querySelector("[data-modal3]"),
    };
  
    refs.openModalBtn1a.addEventListener("click", toggleModal1);
    refs.openModalBtn1b.addEventListener("click", toggleModal1);
    refs.closeModalBtn1.addEventListener("click", toggleModal1);

    refs.openModalBtn2.addEventListener("click", toggleModal2);
    refs.closeModalBtn2.addEventListener("click", toggleModal2);

    refs.openModalBtn3.addEventListener("click", toggleModal3);
    refs.closeModalBtn3.addEventListener("click", toggleModal3);
  
    function toggleModal1() {
      refs.modal1.classList.toggle("is-hidden");
    }
    function toggleModal2() {
      refs.modal2.classList.toggle("is-hidden");
    }
    function toggleModal3() {
      refs.modal3.classList.toggle("is-hidden");
    }
  })();