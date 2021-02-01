$('.feedback-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feedback-nav',
  });
  $('.feedback-nav').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    asNavFor: '.feedback-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,

    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 5,
    //     }
    //   },
    //   {
    //     breakpoint: 320,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ]
  });

