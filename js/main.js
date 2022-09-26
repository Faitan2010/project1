// 1 - sliders (+)
// 2 - animate header (+)
// 3 - loader (+)
// 4 - submit forms
// 5 - modal window
// 6 - counters
// 7 - file input
// 8 - animate icons
// 9 - wow.js

// window.addEventListener('load', () => {})

$(document).ready(function () {
    const mask = document.querySelector('.mask')
    setTimeout(() => {
        mask.classList.add('mask-none');
    }, 1200)
    $('.slayder').slick({
        prevArrow: `<svg class="slayder-arrow prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2L3 16L17 30" stroke="#333333" stroke-width="3" />
</svg>`,
        nextArrow: ` <svg class="slayder-arrow next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L16 16L2 30" stroke="#333333" stroke-width="3" />
</svg>`,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            infinite: true,
            dots: true,
          }
        }
    ]
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
</svg>`,
    responsive: [
        {
        breakpoint: 1025,
        settings: {
            infinite: true,
            dots: true,
            slidesToShow: 2,
        }
        },
        {
        breakpoint: 590,
        settings: {
            infinite: true,
            dots: true,
            slidesToShow: 1,
        }
        }
    ]
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
        variableWidth: true,
        responsive: [
            {
            breakpoint: 1025,
            settings: {
                infinite: true,
                dots: true,
            }
            }
        ]
    });
        const headerMenu = document.querySelector('.header-menu');
        
    if (window.innerWidth >= 1024) {
        let prevScrollValue = window.scrollY;
        console.log (window.innerWidth)
        window.addEventListener('scroll', animateHeader);
        function animateHeader() {
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
    }

    

    const counterWrappers = [...document.querySelectorAll('.table-column-counter-info')];

    counterWrappers.forEach((item) => {
        new Counter(item);
    });
});

function Counter(counter) {
    if (!counter) {
        return;
    }

    this.plus = counter.querySelector('.span-plus');
    this.minus = counter.querySelector('.span-minus');
    this.counterInput = counter.querySelector('.table-column-counter-info-text');

    this.increment = (e) => {
        e.preventDefault();

        this.counterInput.value = Number(this.counterInput.value) + 1;
    }

    this.decrement = (e) => {
        e.preventDefault();

        if (this.counterInput.value <= 0) {
            return
        }
        this.counterInput.value = Number(this.counterInput.value) - 1;
    }

    this.checkInputValue = (e) => {
        if (isNaN(this.counterInput.value)) {
            this.counterInput.value = 0;
        }
    }

    this.plus.addEventListener('click', this.increment);
    this.minus.addEventListener('click', this.decrement);
    this.counterInput.addEventListener('input', this.checkInputValue);
}
