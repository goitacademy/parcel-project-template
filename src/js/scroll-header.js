// Вариант 1

// const animHeader = document.bgColor('.pink-color');

// if (window.pageYOffset > .headerHeight) {
//     bgColor = '.pink-color';
//     } else {
//     img2.style.visibility = 'rgba(255, 255, 255, 0)';
//     }

//  Вариант 2

var bgColor1 = { r: 255, g: 255, b: 255, a: 0 }//Из какого цвета
var bgColor2 = { r: 255, g: 202, b: 0.9 }//В какой цвет

window.onload = function () {
    window.dispatchEvent(new Event("scroll"));
}
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - innerHeight;//Получаем высоту видимой части окна
    var percent = scrollTop / scrollHeight;
    var color = { r: 0, g: 0, b: 0 };
    var tmp = Math.abs(bgColor1.r - bgColor2.r) * percent;
    color.r = Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp : bgColor1.r + tmp);

    tmp = Math.abs(bgColor1.g - bgColor2.g) * percent;
    color.g = Math.ceil(bgColor1.g > bgColor2.g ? bgColor1.g - tmp : bgColor1.g + tmp);

    tmp = Math.abs(bgColor1.b - bgColor2.b) * percent;
    color.b = Math.ceil(bgColor1.b > bgColor2.b ? bgColor1.b - tmp : bgColor1.b + tmp);

    document.getElementById("header").style.background = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
});