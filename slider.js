$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        initialSlide: 3
    });
});

// console.log("Cum")

// function check() {
//   if (
//     window.matchMedia("(min-width: 320px)").matches &&
//     window.matchMedia("(max-width: 767px)").matches
//   ) {
//     const list = document.querySelector(".slick-dots");
//     if (
//       document
//         .querySelector("#slick-slide-control00")
//         .closest("li")
//         .classList.contains("slick-active")
//     ) {
//       list.style.marginLeft = "232px";
//     }
//     if (
//       document
//         .querySelector("#slick-slide-control01")
//         .closest("li")
//         .classList.contains("slick-active")
//     ) {
//       list.style.marginLeft = "168px";
//     }
//     if (
//       document
//         .querySelector("#slick-slide-control02")
//         .closest("li")
//         .classList.contains("slick-active")
//     ) {
//       list.style.marginLeft = "104px";
//     }
//     if (
//       document
//         .querySelector("#slick-slide-control03")
//         .closest("li")
//         .classList.contains("slick-active")
//     ) {
//       list.style.marginLeft = "40px";
//     }
//     if (
//       document
//         .querySelector("#slick-slide-control04")
//         .closest("li")
//         .classList.contains("slick-active")
//     ) {
//       list.style.marginLeft = "-24px";
//     }
//     if (
//       document
//         .querySelector("#slick-slide-control05")
//         .closest("li")
//         .classList.contains("slick-active")
//     ) {
//       list.style.marginLeft = "-88px";
//     }
//     if (
//       document
//         .querySelector("#slick-slide-control06")
//         .closest("li")
//         .classList.contains("slick-active")
//     ) {
//       list.style.marginLeft = "-152px";
//     }
//   }
// }

console.log("Cum")

function check() {
  if (
    window.matchMedia("(min-width: 320px)").matches &&
    window.matchMedia("(max-width: 767px)").matches
  ) {
    const list = document.querySelector(".slick-dots");
    if (
      document
        .querySelector("#slick-slide-control00")
        .closest("li")
        .classList.contains("slick-active")
    ) {
      list.style.transform = "translateX(192px)";
    }
    if (
      document
        .querySelector("#slick-slide-control01")
        .closest("li")
        .classList.contains("slick-active")
    ) {
      list.style.transform = "translateX(128px)";
    }
    if (
      document
        .querySelector("#slick-slide-control02")
        .closest("li")
        .classList.contains("slick-active")
    ) {
      list.style.transform = "translateX(64px)";
    }
    if (
      document
        .querySelector("#slick-slide-control03")
        .closest("li")
        .classList.contains("slick-active")
    ) {
      list.style.transform = "translateX(0px)";
    }
    if (
      document
        .querySelector("#slick-slide-control04")
        .closest("li")
        .classList.contains("slick-active")
    ) {
      list.style.transform = "translateX(-64px)";
    }
    if (
      document
        .querySelector("#slick-slide-control05")
        .closest("li")
        .classList.contains("slick-active")
    ) {
      list.style.transform = "translateX(-128px)";
    }
    if (
      document
        .querySelector("#slick-slide-control06")
        .closest("li")
        .classList.contains("slick-active")
    ) {
      list.style.transform = "translateX(-192px)";
    }
  }
}

setTimeout(() => {
  for (let i = 0; i < 7; i++) {
    document
      .querySelector(`#slick-slide-control0${i}`)
      .addEventListener("click", check);
  }
  document.querySelector(".slick-prev").addEventListener("click", check);
  document.querySelector(".slick-next").addEventListener("click", check);
}, 2000);