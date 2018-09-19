var mySwiper = new Swiper(".swiper-container",{
    slidesPerView: "auto",
    centeredSlides: !0,
    watchSlidesProgress: !0,
    pagination: ".swiper-pagination",
    paginationClickable: !0,
    onTransitionEnd: function(a){
        var index = a.activeIndex;
        switch(index) {
            case 0: 
                $('body').css('background', '#598091');
                $('.nav_item').eq(0).addClass('active').siblings().removeClass('active');
                break;
            case 1:
                $('body').css('background', '#746c62');
                $('.nav_item').eq(0).addClass('active').siblings().removeClass('active');
                break;
            case 2:
                $('body').css('background', '#536866');
                $('.nav_item').eq(1).addClass('active').siblings().removeClass('active');
                break;
            case 3:
                $('body').css('background', '#786557');
                $('.nav_item').eq(1).addClass('active').siblings().removeClass('active');
                break;
            case 4:
                $('body').css('background', '#4b4f57');
                $('.nav_item').eq(2).addClass('active').siblings().removeClass('active');
                break;
            case 5:
                $('body').css('background', '#706956');
                $('.nav_item').eq(3).addClass('active').siblings().removeClass('active');
                break;
            default:
               $('body').css('background', '#598091'); 
        }
    },
    onProgress: function(a) {
        var b, c, d;
        for (b = 0; b < a.slides.length; b++) {
            c = a.slides[b],
            d = c.progress,
            scale = 1 - Math.min(Math.abs(.2 * d), 1),
            es = c.style,
            es.opacity = 1 - Math.min(Math.abs(d / 2), 1),
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0px,0," + -Math.abs(150 * d) + "px)"
        }
    },
    onSetTransition: function(a, b) {
        for (var c = 0; c < a.slides.length; c++) {
            es = a.slides[c].style,
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
        }
    }
});