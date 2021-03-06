$(document).ready(function () {
  $('.review-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    fade: false,
    asNavFor: '.review-second-slider',
    infinite: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          prevArrow:
            '<button type="button" class="slick-prev" aria-label="Previous review"><svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 7C26.5523 7 27 7.44772 27 8C27 8.55228 26.5523 9 26 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM26 9H1V7H26V9Z" fill="#FF6B09"/></svg></button>',
          nextArrow:
            '<button type="button" class="slick-next" aria-label="Next review"><svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z" fill="#FF6B09"/></svg></button>',
        },
      },
    ],
  });
});
$('.review-second-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: true,
  prevArrow:
    '<button type="button" class="slick-prev" aria-label="Previous review"><svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 7C26.5523 7 27 7.44772 27 8C27 8.55228 26.5523 9 26 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM26 9H1V7H26V9Z" fill="#FF6B09"/></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next" aria-label="Next review"><svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z" fill="#FF6B09"/></svg></button>',
  asNavFor: '.review-slider',
  centerMode: false,
  focusOnSelect: true,
  infinite: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
