$grid = $('.grid').masonry({
  itemSelector: '.grid__item',
  columnWidth: 140,
  gutter: 6,
  isFitWidth: true
  // stamp: '.stamp'
});
$grid.on( 'mouseover', '.grid__item', function() {
  // change size of item via class
  $( this ).toggleClass('grid__item--gigante');
  // trigger layout
  $grid.masonry();
});

$grid.on('mouseleave', '.grid__item', function () {
  // change size of item via class
  $(this).removeClass('grid__item--gigante');
  // trigger layout
  $grid.masonry();
});

