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
