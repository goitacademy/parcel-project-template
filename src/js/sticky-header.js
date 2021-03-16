window.onscroll = function () { myFunction() };
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }

var m = document.querySelector("main"),
    h = document.querySelector("header"),
    hHeight;
function setTopPadding() {
    hHeight = h.offsetHeight;
    m.style.paddingTop = hHeight + "px";
}