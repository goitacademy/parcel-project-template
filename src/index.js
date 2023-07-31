import { gsap } from 'gsap';
import "./quotes";
import "./background";
import "./favoriteList";

function animateSquares() {
  const cubeFirst = document.querySelector('.cube-first');
  const cubeSecond = document.querySelector('.cube-second');

  gsap.to(cubeFirst, {
    duration: 30,
    x: 1200,
    y: 600,
    rotate: 400,
    repeat: -1,
    yoyo: true,
  });

  gsap.to(cubeSecond, {
    duration: 30,
    x: -1000,
    y: 1000,
    rotate: 400,
    repeat: -1,
    yoyo: true,
  });
}

animateSquares();

