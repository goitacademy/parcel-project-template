
      $(document).ready(function () {
        $('.slick-slider').slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,

          prevArrow:'<button type="button" class="slick-prev">Назад</button>',
          nextArrow:'<button type="button" class="slick-next">Вперёд</button>',
        })
      })