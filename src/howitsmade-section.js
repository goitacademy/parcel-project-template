var howitsmadeVideo = document.getElementById('video');
var howitsmadePhoto = document.getElementById('photo');
var howitsmadeButton = document.getElementById('buttonPlay');

function playPause() {
  if (howitsmadeVideo.paused) {
    // //afisezi videou
    // howitsmadeVideo.removeAttribute('hidden');
    //ascunzi poza
    howitsmadePhoto.style.display = 'none';
    howitsmadeButton.style.display = 'none';
    // dai drumu la video
    howitsmadeVideo.play();
  }
}
function videoClick() {
  if (!howitsmadeVideo.paused) {
    // opresti la video
    howitsmadeVideo.pause();
    //  //afisezi poza
    //  howitsmadePhoto.removeAttribute('hidden');
    //ascunzi video
    howitsmadeButton.style.display = '';
    howitsmadePhoto.style.display = '';
  }
}
