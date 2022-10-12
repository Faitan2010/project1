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
const maskOptions = {
    mask: '+{38}(000)000-00-00'
};
const validationRules = {
    telRules: {
        length: {
            is: 17,
            message: 'Введите правильный номер',
        }
    },
    nameRules: {
        format: {
            pattern: "[a-zA-Z ]+",
            flags: "i",
            message: "write correct name"
        },
        length: {
            minimum: 3,
            message: 'Мало букв',
        }
    }
}
console.log(validationRules.nameRules.length.message);

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

    const forms = document.querySelectorAll('form');


    forms.forEach((item) => {
        new Form(item)
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
const links = [...document.querySelectorAll(".subheader-menu-link")];
const menu = document.querySelector('.menu-icon');
const header = document.querySelector('.header-menu');
links.forEach((l) => {
    const href = l.getAttribute('href');
    if (href.length > 1 && href.includes('#')) {
        l.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024){
            header.classList.toggle('active');
            }
        })
    }
})
menu.addEventListener('click', (e) => {
    header.classList.toggle('active');
})



function Form(form) {
    if (!form) {
        return;
    }
    const _this = this;
    this.loader = form.querySelector('.mask-form');
    this.errorMessages = form.querySelector('.error-message');
    this.formFields = form.querySelectorAll('[name]');
    this.phoneInputs = form.querySelectorAll('.tel');
    this.nameInputs = form.querySelectorAll('.name');

    this.phoneInput = [...this.formFields].find((p) =>  {
        return p.classList.contains('tel')
    });

    this.nameInput = [...this.formFields].find((n) => {
        return n.classList.contains('name')
    });

    this.focusInputs = function() {
        _this.formFields.forEach((item) => {
            const hasItemPlaceholder = Boolean(item.placeholder);
            if(hasItemPlaceholder) {
                item.addEventListener('focus', (e) => {
                    item.placeholder = ""
                })
            }
        })
    };

    this.blurInputs = function() {
        _this.phoneInputs.forEach((item) => {
            const nullPhone = Boolean(item.placeholder);
            if(nullPhone) {
                item.addEventListener('blur', (e) => {
                    item.placeholder = "+7 (923) 123-45-67"
                })
            }
        })
    };

    this.blurInputsForName = function() {
        _this.nameInputs.forEach((item) => {
            const nullName = Boolean(item.placeholder);
            if(nullName) {
                item.addEventListener('blur', (e) => {
                    item.placeholder = "Александров Николай"
                })
            }
        })
    };

    
    this.inputTelMask = function (Input) {
        if(Input) {
            const mask = IMask(Input, maskOptions);
        }
    }
    this.inputTelMask(_this.phoneInput)

    this.setError = function() {
        const errorBlock = document.createElement('p');
        
        const errorElem = _this.phoneInput.parentElement.querySelector('.error-message');
        errorBlock.innerHTML = `${validationRules.telRules.length.message}`;
            if(errorElem) {
                errorElem.parentElement.removeChild(errorElem)
            }
            errorBlock.classList.add('error-message')
            _this.phoneInput.parentElement.appendChild(errorBlock);
        if(_this.nameInput) {
            const errorElemName = _this.nameInput.parentElement.querySelector('.error-message');
            const errorBlockName = document.createElement('p');
        if(validationRules.nameRules.length.message) {
            errorBlockName.innerHTML = `${validationRules.nameRules.length.message}`
        } else if (validationRules.nameRules.format.message) {
            errorBlockName.innerHTML = `${validationRules.nameRules.format.message}`
        } else if (validationRules.nameRules.length.message && validationRules.nameRules.format.message) {
            errorBlockName.innerHTML = `${validationRules.nameRules.format.message}`
        }
        if(errorElemName) {
            errorElemName.parentElement.removeChild(errorElemName)
        }
        errorBlockName.classList.add('error-message')
            _this.nameInput.parentElement.appendChild(errorBlockName);
        }
    }

    this.unsetError = function() {
        const errorBlock = document.createElement('p');
        const errorElem = _this.phoneInput.parentElement.querySelector('.error-message');
        const errorElemName = _this.nameInput.parentElement.querySelector('.error-message');
        const errorBlockName = document.createElement('p');
        console.log(validationRules.nameRules.format);
        if(_this.nameInput.value.length > 2) {
            errorElemName.parentElement.removeChild(errorElemName);
        }
        if(_this.phoneInput.value.length === 17) {
            errorElem.parentElement.removeChild(errorElem);
        }
    }

    this.submitHandler = function (e) {
        e.preventDefault();
       if(_this.nameInput) {
        const errorElemName = _this.nameInput.parentElement.querySelector('.error-message');
       }
        const errorElem = _this.phoneInput.parentElement.querySelector('.error-message');
        const values = {};
        if(_this.phoneInput) {
            values['telRules'] = _this.phoneInput.value
        }
        if(_this.nameInput) {
            values['nameRules'] = _this.nameInput.value
        }
        const isFormValid = validate(values, validationRules);
        console.log(isFormValid);
        if(!isFormValid) {
            _this.loader.classList.add('active');
                setTimeout(function () {
                    _this.loader.classList.remove('active')
                    errorElem.parentElement.removeChild(errorElem);
                    errorElemName.parentElement.removeChild(errorElemName);
                }, 3000);
                _this.phoneInput.value = "";
                _this.nameInput.value = "";
                return
            }
        _this.setError()
        _this.unsetError()
    }
    form.addEventListener('submit', this.submitHandler);
    this.focusInputs()
    this.blurInputs()
    this.blurInputsForName()
}

// function setError() {
//     // errorElem.innerHTML = errorMessage;
//     // errorElem.classList.add('active');
//     const errorBlock = document.createElement('p');
//     errorBlock.innerHTML = '1';
//     errorBlock.classList.add('error-message')
// }












