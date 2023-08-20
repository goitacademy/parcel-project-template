document.addEventListener('DOMContentLoaded', function () {
  const mediaSection = document.querySelector('.media-section');
  const playPauseButton = document.querySelector('.play-btn');
  const video = document.querySelector('.made-video');
  let hoverTimeout;

  mediaSection.addEventListener('click', function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener('play', function () {
    playPauseButton.style.opacity = '0';
  });

  video.addEventListener('pause', function () {
    playPauseButton.style.opacity = '1';
  });

  mediaSection.addEventListener('mouseenter', function () {
    if (!video.paused) {
      playPauseButton.style.opacity = '1';
    }
  });

  mediaSection.addEventListener('mouseleave', function () {
    if (!video.paused) {
      hoverTimeout = setTimeout(function () {
        playPauseButton.style.opacity = '0';
      }, 500); // Butonul va dispărea în 0.5 secunde după ieșirea din hover
    }
  });

  playPauseButton.addEventListener('mouseenter', function () {
    clearTimeout(hoverTimeout);
    playPauseButton.style.opacity = '1';
  });
});
