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
