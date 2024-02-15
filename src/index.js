(() => {
  function showSidebar() {
        const sidebar = document.querySelector('.header-burger-mobile-menu')
        sidebar.style.display = 'flex'
    }
  function hideSidebar() {
    const sidebar = document.querySelector('.header-burger-mobile-menu')
    sidebar.style.display = 'none'
  }
})();
