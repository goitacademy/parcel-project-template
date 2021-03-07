(function() {
	let d = document;

	function init() {
		//Links 
		let programLink  = d.getElementById('programLink');
        let aboutLink = d.getElementById('aboutLink');
        let how_we_doLink = d.getElementById('how_we_doLink');
        let contactsLink = d.getElementById('contactsLink');


		//Anchors
        let program_scroll = d.getElementById('program_scroll');
        let about_scroll = d.getElementById('about_scroll');
        let how_we_do_scroll = d.getElementById('how_we_do_scroll');
        let contacts_scroll = d.getElementById('contacts_scroll');

		programLink.addEventListener('click', (e) => { scrollTo(program_scroll, e) }, false);
		programLink2.addEventListener('click', (e) => { scrollTo(program_scroll, e) }, false);
        aboutLink.addEventListener('click', (e) => { scrollTo(about_scroll, e) }, false);
        aboutLink2.addEventListener('click', (e) => { scrollTo(about_scroll, e) }, false);
		how_we_doLink.addEventListener('click', (e) => { scrollTo(how_we_do_scroll, e) }, false);
		how_we_doLink2.addEventListener('click', (e) => { scrollTo(how_we_do_scroll, e) }, false);
		contactsLink.addEventListener('click', (e) => { scrollTo(contacts_scroll, e) }, false);
		contactsLink2.addEventListener('click', (e) => { scrollTo(contacts_scroll, e) }, false);
		contactsLink3.addEventListener('click', (e) => { scrollTo(contacts_scroll, e) }, false);
		
	}

	var requestAnimFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();

	function scrollTo(to, callback, duration = 1500) { 
		
		if (isDomElement(to)) {

			to = to.offsetTop;
		}
		
		
		
		function move(amount) {
			// document.scrollingElement.scrollTop = amount; //FIXME Test that
			document.documentElement.scrollTop = amount;
			document.body.parentNode.scrollTop = amount;
			document.body.scrollTop = amount;
		}

		function position() {
			return document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop;
		}
		
		var start = position(),
			change = to - start,
			currentTime = 0,
			increment = 20;
		
		var animateScroll = function() {
			// increment the time
			currentTime += increment;
			// find the value with the quadratic in-out easing function
			var val = Math.easeInOutQuad(currentTime, start, change, duration);
			// move the document.body
			move(val);
			// do the animation unless its over
			if (currentTime < duration) {
				requestAnimFrame(animateScroll);
			}
			else {
				if (callback && typeof(callback) === 'function') {
					// the animation is done so lets callback
					callback();
				}
			}
		};
		
		animateScroll();
	}

	init();
})();

Math.easeInOutQuad = function(t, b, c, d) {
	t /= d / 2;
	if (t < 1) {
		return c / 2 * t * t + b
	}
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
	var tc = (t /= d) * t * t;
	return b + c * (tc);
};

Math.inOutQuintic = function(t, b, c, d) {
	var ts = (t /= d) * t,
		tc = ts * t;
	return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

function isDomElement(obj) {
    return obj instanceof Element;
}

function isMouseEvent(obj) {
    return obj instanceof MouseEvent;
}

function findScrollingElement(element) { //FIXME Test this too
	do {
		if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
			return element;
		}
	} while (element = element.parentNode);
}