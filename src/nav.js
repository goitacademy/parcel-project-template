(() => {
	const refs = {
		menuBtn: document.querySelector("[data-menu]"),
		mobileMenu: document.querySelector(".nav-container"),
	};

	// ---- Open and close Modal-Menu ------	
	refs.menuBtn.addEventListener("click", toggleMenu);
	refs.menuBtn.addEventListener("click", toggleScroll);


	function toggleScroll() {
		if (document.body.style.overflow == "hidden") {
			document.body.style.overflow = "";
		} else {
			document.body.style.overflow = "hidden"
		}
	}

	function toggleMenu() {
		refs.menuBtn.classList.toggle("is-open");
		refs.mobileMenu.classList.toggle("is-open");
	}

})();