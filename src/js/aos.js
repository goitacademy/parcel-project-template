AOS.init();

// AOS.init({
//   disable: 'mobile'
// });

AOS.init({
  disable: function () {
    var maxWidth = 1280;
    return window.innerWidth < maxWidth;
  }
});

