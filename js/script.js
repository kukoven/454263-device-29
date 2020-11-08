const writeUsBtn = document.querySelector('.contacts__mail-to');
const modal = document.querySelector('.modal-write-us');
const closeBtn = modal.querySelector('.modal__close-button');
const form = modal.querySelector('.form-write-us');
const name = modal.querySelector('input[name = name]');
const mail = modal.querySelector('input[type = email]');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

writeUsBtn.addEventListener('click', function(evt) {

  evt.preventDefault();
  modal.classList.add('modal--show');

  if (storage) {
    storage = name.value;
    mail.focus();
  } else {
    name.focus();
  }

});

closeBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove('modal--show');
  modal.classList.remove('modal--error');
});

form.addEventListener('submit', function(evt) {

  if (!name.value || !mail.value) {
    evt.preventDefault();

    modal.classList.remove('modal--error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
    }
  }

});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal--show')) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
      modal.classList.remove('modal--error');
    }
  }
});

const mapLink= document.querySelector('.contacts__map');
const modalMap = document.querySelector('.modal-map');
const closeMapBtn = modalMap.querySelector('.modal__close-button');

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('modal--show');
});

closeMapBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal--show');
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains('modal--show')) {
      evt.preventDefault();
      modalMap.classList.remove('modal--show');
    }
  }
});

const promoButton1 = document.querySelector('.promo-slider__button--1');
const promoButton2 = document.querySelector('.promo-slider__button--2');
const promoButton3 = document.querySelector('.promo-slider__button--3');
const promoItem1 = document.querySelector('.promo-slider__item--1');
const promoItem2 = document.querySelector('.promo-slider__item--2');
const promoItem3 = document.querySelector('.promo-slider__item--3');


promoButton1.addEventListener('click', function(evt) {
  evt.preventDefault();
  promoItem2.classList.remove('promo-slider__item--current');
  promoItem3.classList.remove('promo-slider__item--current');
  promoButton2.classList.remove('promo-slider__button--current');
  promoButton3.classList.remove('promo-slider__button--current');
  promoButton1.classList.add('promo-slider__button--current');
  promoItem1.classList.add('promo-slider__item--current');
});

promoButton2.addEventListener('click', function(evt) {
  evt.preventDefault();
  promoItem1.classList.remove('promo-slider__item--current');
  promoItem3.classList.remove('promo-slider__item--current');
  promoButton1.classList.remove('promo-slider__button--current');
  promoButton3.classList.remove('promo-slider__button--current');
  promoButton2.classList.add('promo-slider__button--current');
  promoItem2.classList.add('promo-slider__item--current');
});

promoButton3.addEventListener('click', function(evt) {
  evt.preventDefault();
  promoItem1.classList.remove('promo-slider__item--current');
  promoItem2.classList.remove('promo-slider__item--current');
  promoButton1.classList.remove('promo-slider__button--current');
  promoButton2.classList.remove('promo-slider__button--current');
  promoButton3.classList.add('promo-slider__button--current');
  promoItem3.classList.add('promo-slider__item--current');
});

const servicesBtn1 = document.querySelector('.services-slider__button--1');
const servicesBtn2 = document.querySelector('.services-slider__button--2');
const servicesBtn3 = document.querySelector('.services-slider__button--3');
const servicesItem1 = document.querySelector('.services-slider__item--1');
const servicesItem2 = document.querySelector('.services-slider__item--2');
const servicesItem3 = document.querySelector('.services-slider__item--3');
const servicesListItem1 =document.querySelector('.services-slider__controls-item--1');
const servicesListItem2 =document.querySelector('.services-slider__controls-item--2');
const servicesListItem3 =document.querySelector('.services-slider__controls-item--3');

servicesBtn1.addEventListener('click', function(evt) {
  evt.preventDefault();

  servicesListItem1.classList.remove('services-slider__controls-item--current');
  servicesListItem2.classList.remove('services-slider__controls-item--current');
  servicesListItem3.classList.remove('services-slider__controls-item--current');
  servicesItem1.classList.remove('services-slider__item--current');
  servicesItem2.classList.remove('services-slider__item--current');
  servicesItem3.classList.remove('services-slider__item--current');

  servicesListItem1.classList.add('services-slider__controls-item--current');
  servicesItem1.classList.add('services-slider__item--current');
});

servicesBtn2.addEventListener('click', function(evt) {
  evt.preventDefault();

  servicesListItem1.classList.remove('services-slider__controls-item--current');
  servicesListItem2.classList.remove('services-slider__controls-item--current');
  servicesListItem3.classList.remove('services-slider__controls-item--current');
  servicesItem1.classList.remove('services-slider__item--current');
  servicesItem2.classList.remove('services-slider__item--current');
  servicesItem3.classList.remove('services-slider__item--current');

  servicesListItem2.classList.add('services-slider__controls-item--current');
  servicesItem2.classList.add('services-slider__item--current');
});

servicesBtn3.addEventListener('click', function(evt) {
  evt.preventDefault();

  servicesListItem1.classList.remove('services-slider__controls-item--current');
  servicesListItem2.classList.remove('services-slider__controls-item--current');
  servicesListItem3.classList.remove('services-slider__controls-item--current');
  servicesItem1.classList.remove('services-slider__item--current');
  servicesItem2.classList.remove('services-slider__item--current');
  servicesItem3.classList.remove('services-slider__item--current');

  servicesListItem3.classList.add('services-slider__controls-item--current');
  servicesItem3.classList.add('services-slider__item--current');
});

