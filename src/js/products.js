(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        s(e);
    new MutationObserver(e=>{
        for (const t of e)
            if (t.type === "childList")
                for (const r of t.addedNodes)
                    r.tagName === "LINK" && r.rel === "modulepreload" && s(r)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(e) {
        const t = {};
        return e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin",
        t
    }
    function s(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = i(e);
        fetch(e.href, t)
    }
}
)();
new Swiper(".myswwiper",{
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 18
        }
    }
});

