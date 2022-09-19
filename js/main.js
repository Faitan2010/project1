// 1 - sliders
// 2 - animate header
// 3 - loader
// 4 - submit forms
// 5 - modal window
// 6 - counters
// 7 - file input
// 8 - animate icons
// 9 - wow.js

// window.addEventListener('load', () => {})

$(document).ready(function () {
    $('.slayder').slick({
        prevArrow: `<svg class="slayder-arrow prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2L3 16L17 30" stroke="#333333" stroke-width="3" />
</svg>`,
        nextArrow: ` <svg class="slayder-arrow next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L16 16L2 30" stroke="#333333" stroke-width="3" />
</svg>`
    });

    $('.team-slayder').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: `<svg class="slayder-arrow team-prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2L3 16L17 30" stroke="#FFFFFF" stroke-width="3" />
</svg>`,
        nextArrow: ` <svg class="slayder-arrow team-next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L16 16L2 30" stroke="#FFFFFF" stroke-width="3" />
</svg>`
    });

    $('.rewiev-slayder').slick({
        prevArrow: `<svg class="slayder-arrow rewiev-prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2L3 16L17 30" stroke="#333333" stroke-width="3" />
</svg>`,
        nextArrow: ` <svg class="slayder-arrow rewiev-next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L16 16L2 30" stroke="#333333" stroke-width="3" />
</svg>`,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        variableWidth: true
    });
    const headerMenu = document.querySelector('.header-menu');
    let prevScrollValue = window.scrollY;

    window.addEventListener('scroll', animateHeader);

    function animateHeader () {
        if (prevScrollValue < window.scrollY) {

            if (!headerMenu.classList.contains('header-animate')) {
                headerMenu.classList.add('header-animate');
            }
        } else {

            if (headerMenu.classList.contains('header-animate')) {
                headerMenu.classList.remove('header-animate');
            }
        }

        prevScrollValue = window.scrollY;
    }
});

