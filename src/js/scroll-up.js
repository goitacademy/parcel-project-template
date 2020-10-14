var smoothJumpUp = function () {
  if (document.header.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(smoothJumpUp, 1);
  }
};

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    document.getElementById('upbutton').style.display = 'flex';
  } else {
    document.getElementById('upbutton').style.display = 'none';
  }
};
