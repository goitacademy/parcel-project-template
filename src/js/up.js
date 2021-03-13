window.onscroll = function () {
    if (pageYOffset >= 200) {
        document.getElementById('backToTop').style.opacity = "1";
    } else {
 document.getElementById('backToTop').style.opacity = "0";
    }
};

document.getElementById('backToTop').onclick = function()
{
        window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}