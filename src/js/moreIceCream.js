// function readMore() {
//     var dot = document.getElementById("dot");
//     var moreIce = document.getElementById("moreIce");
//     var iceCreamBtn = document.getElementById("iceCreamBtn");

//     if (dot.style.display === "none") {
//         dot.style.display = "inline";
//         iceCreamBtn.innerHTML="more";
//         moreIce.style.display = "none";
//     }
//     else {
//          dot.style.display = "none";
//         iceCreamBtn.innerHTML="Confirm";
//         moreIce.style.display = "block";
//     }
// }

    document.getElementById('hider icecream').onclick = function () {
      document.getElementById('read more icecream').hidden = true;
    };
 
    
    document.getElementById('opener icecream').onclick = function () {
      document.getElementById('read more icecream').hidden = false;
    };
  
    document.getElementById('hider coffee').onclick = function () {
      document.getElementById('read more coffee').hidden = true;
    };
 
    document.getElementById('opener coffee').onclick = function () {
      document.getElementById('read more coffee').hidden = false;
    };
  
    document.getElementById('hider milkshake').onclick = function () {
      document.getElementById('read more milkshake').hidden = true;
};
    document.getElementById('opener milkshake').onclick = function () {
      document.getElementById('read more milkshake').hidden = false;
    };

  

