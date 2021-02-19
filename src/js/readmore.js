$('.hero__arrow').on('click', function () {
        if ($(this).prev().is(':visible')) {
          $(this).prev().hide('slow');
        } else {
          $(this).prev().show('slow');
        }
      });

      $('.hero__arrow').on('click', function () {
        this.classList.toggle('rotate');
      });