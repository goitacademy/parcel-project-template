$('.customer__list').slick({
	infinite: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});