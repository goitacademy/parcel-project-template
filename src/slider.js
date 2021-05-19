

$(document).ready(function(){
    var $slider = $('.slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });}
    $('.slider').slick({
    centerMode: true,
    centerPadding:'10px',
    slidesToShow: 3,
    slidesToScroll: 1,
        arrows:true,
        
        responsive: [
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
                arrows:false
            }
        }
        ]
    
    });
    
});

