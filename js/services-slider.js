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
