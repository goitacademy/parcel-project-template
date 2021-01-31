

const appLog = (upSelector) => {
    const upElem = document.querySelector(upSelector);
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
            console.log('start');
            upElem.style.opacity = 1;
        } else {
            upElem.style.opacity = 0;
        }
    });

//Sroling with RAF
    
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.05;
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(this.hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);
            
            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) :
                        Math.min(widthTop + progress / speed, widthTop + toBlock));
                document.documentElement.scrollTo(0, r);
                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }


        });

    });
   
};

export default appLog;