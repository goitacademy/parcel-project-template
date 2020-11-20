import "./sass/main.scss";

$(document).ready(function () {
	$('.slid-list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slid-list-small',
		arrows: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					arrows: true,

				}
			},
			{
				breakpoint: 1314,
				settings: {
					arrows: true,
				},

			},]



	});

	$('.slid-list-small').slick({

		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slid-list',
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1314,
				settings: {
					arrows: false,
					slidesToShow: 7,
					slidesToScroll: 1
				},

			},
		]
	});
});