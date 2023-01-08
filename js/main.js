// 6 - counters
// 7 - file input
// 8 - animate icons
// 9 - wow.js
// 10!!!! - закрытие модалки по esc (wind ow.addEventListener ('keypress'))
// 11!!! сделать дефолтное значение (ццена за кг) заменить не дефолтное значение (\кг)
// 12!!! переписать на файнд индекс.,
// 13!! убрать disable select 
// 14!! codewars!!!!!!
// 15!!! разобраться с wow js 
// window.addEventListener('load', () => {})
const maskOptions = {
    mask: '+{38}(000)000-00-00'
};
const validationRules = {
    telRules: {
        length: {
            is: 17,
            message: 'Enter the correct number',
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
            message: 'Few letters',
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



    const counterWrappers = [...document.querySelectorAll('.table-column')];
    // const counterWrappers = [...document.querySelectorAll('.table-column-counter-info')];

    counterWrappers.forEach((item) => {
        const counter = new Counter(item);
        counter.init()
    });

    const forms = document.querySelectorAll('form');

    const modal = new Modal()
    modal.init()

    forms.forEach((item) => {
        const form = new Form(item, modal)
        form.init()
    });

});


function Counter(counter) {
    if (!counter) {
        return;
    }
    this.plus = counter.querySelector('.span-plus');
    this.minus = counter.querySelector('.span-minus');
    this.counterInput = counter.querySelector('.table-column-counter-info-text');
    this.pricesElements = [...counter.querySelectorAll('.volume-value')];
    this.prices = []
    this.pricesValueElements = [...counter.querySelectorAll('.price-value')];
    this.pricesValues = []
    this.result = counter.querySelector('.numbers');
    this.defaultLetter = counter.querySelector('.sum-counter-text');
    const _this = this;

    this.createPrices = (collection, arrayOfValues) => {
        collection.forEach((item) => {
            const priceNumber = item.innerHTML.replace(/ /g,'');
            arrayOfValues.push(Number(priceNumber))
        })
    }

    this.increment = (e) => {
        e.preventDefault();

        this.counterInput.value = Number(this.counterInput.value) + 1;
        _this.priceTable()
    }

    this.decrement = (e) => {
        e.preventDefault();

        if (this.counterInput.value <= 0) {
            return
        }
        this.counterInput.value = Number(this.counterInput.value) - 1;
        _this.priceTable()
    }

    this.checkInputValue = (e) => {
        if (isNaN(this.counterInput.value)) {
            this.counterInput.value = 0;
        }
    }

    this.getPriceIndex = (valueToCompare) => {
        if (!valueToCompare) {
            return 0;
        }

        if (valueToCompare >= _this.prices[_this.prices.length - 1]) {
            return (_this.prices.length - 1);
        }

        return _this.prices.findIndex((item, idx) => {
            return valueToCompare >= item && valueToCompare < _this.prices[idx + 1];
        })
    }

    this.priceTable = () => {
        const value = Number(_this.counterInput.value);
        const priceIndex = _this.getPriceIndex(value);
        const currentPrice = _this.pricesValues[priceIndex];

        if (!value) {
            _this.result.innerHTML = _this.pricesValues[0] + _this.defaultLetter.innerHTML;
            return
        }

        _this.result.innerHTML = `${currentPrice * value} $`;
    }

    this.init = () => {
        this.createPrices(this.pricesElements, this.prices);
        this.createPrices(this.pricesValueElements, this.pricesValues);
        _this.priceTable();
        // console.log(this.pricesValues);
        this.plus.addEventListener('click', this.increment);
        this.minus.addEventListener('click', this.decrement);
        this.counterInput.addEventListener('input', this.checkInputValue);
    }

}

function Modal() {
    this.modal = document.querySelector('.modal');
    const _this = this;
    this.open = function(e){
        _this.modal.classList.add('open')
    }
    this.close = function(e) {
        const isClose = _this.isEventClose(e);

        if(isClose) {
            e.preventDefault();
            _this.modal.classList.remove('open');
        }
    }

    /**
     * @param event - event object from EventListener.
     * @returns {boolean} - true if event target has data attribute equals True or event key is Escape
     */
    this.isEventClose = (event) => {
        if (!event) {
            return false;
        }

        return event.target.dataset.close || event.key === 'Escape';
    }

    this.init = () => {
        _this.modal.addEventListener('click', _this.close);
        document.addEventListener('keydown', _this.close)
    }
}

const links = [...document.querySelectorAll(".subheader-menu-link")];
const menu = document.querySelector('.menu-icon');
const header = document.querySelector('.header-menu');
links.forEach((l) => {
    const href = l.getAttribute('href');
    if (href.length > 1 && href.includes('#')) {
        l.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                header.classList.toggle('active');
            }
        })
    }
})
menu.addEventListener('click', (e) => {
    header.classList.toggle('active');
})



function Form(form, modal) {
    const _this = this;
    this.loader = form.querySelector('.mask-form');
    this.errorMessages = form.querySelector('.error-message');
    this.formFields = form.querySelectorAll('[name]');
    this.phoneInputs = form.querySelectorAll('.tel');
    this.nameInputs = form.querySelectorAll('.name');
    this.textarea = form.querySelector('.textarea');
    this.lockPadding = document.querySelector('.lock-padding')
    // let unlock = true;

    // if(modalLinks.length > 0) {
    //     for(let i = 0; i < modalLinks.length; i++) {
    //         const modalLink = modalLinks[i];
    //         modalLink.addEventListener('click', function(e) {
    //             const modalName = 
    //             const currentModal = 
    //         })
    //     }
    // }




    this.resultMessage = null;
    this.phoneInput = [...this.formFields].find((p) => {
        return p.classList.contains('tel')
    });

    this.nameInput = [...this.formFields].find((n) => {
        return n.classList.contains('name')
    });

    this.focusInputs = function () {
        _this.formFields.forEach((item) => {
            const hasItemPlaceholder = Boolean(item.placeholder);
            if (hasItemPlaceholder) {
                item.addEventListener('focus', (e) => {
                    item.placeholder = ""
                })
            }
        })
    };

    this.blurInputs = function () {
        _this.phoneInputs.forEach((item) => {
            const nullPhone = Boolean(item.placeholder);
            if (nullPhone) {
                item.addEventListener('blur', (e) => {
                    item.placeholder = "+7 (923) 123-45-67"
                })
            }
        })
    };

    this.blurInputsForName = function () {
        _this.nameInputs.forEach((item) => {
            const nullName = Boolean(item.placeholder);
            if (nullName) {
                item.addEventListener('blur', (e) => {
                    item.placeholder = "Aleksandrov Nikolay"
                })
            }
        })
    };
    this.createResultMessage = () => {
        const elem = document.createElement('div');
        elem.classList.add('form-result-message');
        form.append(elem);
        _this.resultMessage = elem;
    }

    this.inputTelMask = function (Input) {
        if (Input) {
            const mask = IMask(Input, maskOptions);
        }
    }
    this.inputTelMask(_this.phoneInput)

    this.setError = function (input, message) {
        if (!input) {
            return
        }
        const errorElem = input.parentElement.querySelector('.error-message');
        errorElem.innerHTML = message;
    }

    this.unsetError = function (input) {
        if (!input) {
            return
        }
        const errorElem = input.parentElement.querySelector('.error-message');
        errorElem.innerHTML = "";
    }


    this.messageAfterValidate = function (status, message) {
        _this.resultMessage.innerHTML = message;
        if (status) {
            _this.resultMessage.classList.add('success-message')
            return
        }
        _this.resultMessage.classList.add('reject-message')
    }

    this.submitHandler = function (e) {
        e.preventDefault();

        const values = {};
        const dataInfo = {};
        if (_this.phoneInput) {
            dataInfo['user-phone'] = _this.phoneInput.value
        }
        if (_this.nameInput) {
            dataInfo['user-name'] = _this.nameInput.value
        }
        if (_this.textarea) {
            dataInfo['user-message'] = _this.textarea.value
        }


        if (_this.phoneInput) {
            values['telRules'] = _this.phoneInput.value;
            _this.unsetError(_this.phoneInput)
        }
        if (_this.nameInput) {
            values['nameRules'] = _this.nameInput.value;
            _this.unsetError(_this.nameInput)
        }

        const checkValidate = validate(values, validationRules);
        if (checkValidate) {
            if (checkValidate.telRules) {
                _this.setError(_this.phoneInput, checkValidate.telRules[0])
            }
            if (checkValidate.nameRules) {
                _this.setError(_this.nameInput, checkValidate.nameRules[0])
            }
            return
        }
        _this.loader.classList.add('active');

        setTimeout(function() {
            _this.loader.classList.remove('active');
            modal.open()

        }, 2000);


        // const dataToSend = new FormData()
        // dataToSend.set('dataInfo', JSON.stringify(dataInfo))
        // fetch('https://m1.ondev.in/api.php', {
        //     method: 'POST',
        //     body: dataToSend,
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         _this.messageAfterValidate(data.status, data.message)
        //     })
        //     .catch(() => {
        //         _this.messageAfterValidate(false, 'Network error. Please try again later')
        //     })
        //     .finally(() => {
        //         _this.loader.classList.remove('active')
        //     })
        _this.phoneInput.value = "";
        if (_this.nameInput) {
            _this.nameInput.value = "";
        }
    }
    this.init = () => {
        if (!form) {
            return;
        }
        this.createResultMessage();
        form.addEventListener('submit', this.submitHandler);
        this.focusInputs()
        this.blurInputs()
        this.blurInputsForName()
        if (this.phoneInput) {
            this.phoneInput.addEventListener('input', () => {
                _this.unsetError(_this.phoneInput)
            })
        }
        if (this.nameInput) {
            this.nameInput.addEventListener('input', () => {
                _this.unsetError(_this.nameInput)
            })
        }
    }
}











