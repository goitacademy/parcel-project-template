$(function() {
  
    var slideCount =  $(".slider ul li").length;
    var slideWidth =  $(".slider ul li").width();
    var slideHeight =  $(".slider ul li").height();
    var slideUlWidth =  slideCount * slideWidth;
    
    $(".slider").css({"max-width":slideWidth, "height": slideHeight});
    $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
    $(".slider ul li:last-child").prependTo($(".slider ul"));
    
    function moveLeft() {
      $(".slider ul").stop().animate({
        left: + slideWidth
      },700, function() {
        $(".slider ul li:last-child").prependTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    function moveRight() {
      $(".slider ul").stop().animate({
        left: - slideWidth
      },700, function() {
        $(".slider ul li:first-child").appendTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    
    $(".next").on("click",function(){
      moveRight();
    });
    
    $(".prev").on("click",function(){
      moveLeft();
    });
    
    
  });