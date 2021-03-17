const buyButtons = document.querySelectorAll('.search-results-goods .buy-link-subject');
const binForm = document.querySelector('.modal-bin');
const binFormCloseButon = document.querySelector('.modal-bin-close');

(function () {
  buyButtons.forEach(element => {
    element.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (binForm.classList.contains('visually-hidden')) {
        binForm.classList.remove('visually-hidden');
        binFormCloseButon.addEventListener('click', closeModal);
      }
    })
  });

})();
let closeModal = function (evt) {
  evt.preventDefault();
  binForm.classList.add('visually-hidden');
  binFormCloseButon.removeEventListener('click', closeModal);
}
