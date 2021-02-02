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
    
    // variableWidth:true,
    // responsive: [
    //   {
    //     breakpoint: 1344,
    //     settings: {
    //       slidesToShow: 7,
    //       arrows: true,
    //       infinite:true,
    //       centerMode: true,
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 7,
    //       arrows: true,
    //     }
    //   },
    //   {
    //     breakpoint: 320,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: true,
    //     }
    //   }
    // ]
  });

