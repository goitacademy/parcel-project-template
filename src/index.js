document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.hamburger-button');
    const menu = document.querySelector('.nav-menu');
    const navHeader = document.querySelector('.nav-header');
    const navContainer = document.querySelector('.nav-container');
    const xbtn = document.querySelector('.x-button');
  
    button.addEventListener('click', function () {
        menu.classList.toggle('show');
        navHeader.classList.toggle('show');
        navContainer.classList.toggle('show');
        button.classList.toggle('btnHide');
        xbtn.classList.toggle('btnShow');
    });

    xbtn.addEventListener('click', function () {
        menu.classList.toggle('show');
        navHeader.classList.toggle('show');
        navContainer.classList.toggle('show');
        button.classList.toggle('btnHide');
        xbtn.classList.toggle('btnShow');
    });
});