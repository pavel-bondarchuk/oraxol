window.onload = function () {

    AOS.init();

    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });

    const swiper = new Swiper('.testimonial__slider', {
        navigation: {
            nextEl: '.testimonial__wrapper-next',
            prevEl: '.testimonial__wrapper-prev',
        },
        loop: true,
        speed: 1000,
        spaceBetween: 5,
    });


    var counter = function () {
        function countUp(elem) {
            var current = elem.innerHTML;


            var timeIntervalBeforeIncrement = 2000 / elem.getAttribute("data-count")


            var interval = setInterval(increase, timeIntervalBeforeIncrement);

            function increase() {
                elem.innerHTML = current++;
                if (current > elem.getAttribute("data-count")) {
                    clearInterval(interval);
                }
            }

        }

        var span = document.querySelectorAll("[id^='count']");

        var i = 0;
        for (i = 0; i < span.length; i++) {
            countUp(span[i]);
        }
    }

    counter();

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.navbar__wrapper');

    burger.addEventListener('click', function () {
        menu.classList.toggle('active');
        burger.classList.add('active');
        burger.classList.toggle('active-close');

        if (menu.classList.contains('active')) {
            document.querySelector('body').style.overflow = "hidden";
        } else {
            document.querySelector('body').style.overflow = "unset";
        }

        setTimeout(function () {
            burger.classList.remove('active')
        }, 400)
    })
}