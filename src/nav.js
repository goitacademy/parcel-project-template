(() => {
	const refs = {
		menuBtn: document.querySelector("[data-menu]"),
		mobileMenu: document.querySelector(".nav-container"),
	};

	// ---- Open and close Modal-Menu ------	
	refs.menuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.menuBtn.classList.toggle("is-open");
		refs.mobileMenu.classList.toggle("is-open");
	}

})();