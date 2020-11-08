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

