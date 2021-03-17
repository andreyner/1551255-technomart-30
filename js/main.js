const writeUsButton = document.querySelector('.about-company-write-us');
const writeUsForm = document.querySelector('.modal-write-us');
const writeUsFormCloseButton = writeUsForm.querySelector('.write-us-close');
const openMapButton = document.querySelector('.mini-map');
const mapForm = document.querySelector('.modal-map');
const mapFormCloseButton = mapForm.querySelector('.modal-map-close');
const sliderLeftButton = document.querySelector('.perforators-slider-left');
const sliderRightButton = document.querySelector('.perforators-slider-right');
const perforatorSliderHeaders = document.querySelectorAll('.services-slide');
const perforatorSwitches = document.querySelectorAll('.perforators-bread-crumbs .perforator-slider');
const serviceSwitches = document.querySelectorAll('.services-list li');
const servicesContent = document.querySelectorAll('.services .service-item');
const buyButtons = document.querySelectorAll('.search-results-goods .buy-link-subject');
const binForm = document.querySelectorAll('.modal-bin');
const binFormCloseButon = document.querySelectorAll('.modal-bin-close');

let createPatternBehavior = function (openButton, form, closeButon) {
  let onWriteUsFormCloseButtonClick = function (evt) {
    form.classList.add('visually-hidden');
    closeButon.removeEventListener('click', onWriteUsFormCloseButtonClick);
  }
  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (form.classList.contains('visually-hidden')) {
      form.classList.remove('visually-hidden');
      closeButon.addEventListener('click', onWriteUsFormCloseButtonClick)
    }
  });
}
createPatternBehavior(writeUsButton, writeUsForm, writeUsFormCloseButton);
createPatternBehavior(openMapButton, mapForm, mapFormCloseButton);

let changeSlide = function (offset) {
  if (perforatorSliderHeaders.length > 1) {
    for (let index = 0; index < perforatorSliderHeaders.length; index++) {
      if (perforatorSliderHeaders[index].classList.contains('active-slide') && index + offset >= 0
        && index + offset < perforatorSliderHeaders.length) {
        perforatorSliderHeaders[index].classList.remove('active-slide');
        perforatorSwitches[index].classList.remove('slider-active-switch');
        perforatorSliderHeaders[index + offset].classList.add('active-slide');
        perforatorSwitches[index + offset].classList.add('slider-active-switch');
      }
    }
  }
}
let setCurrentSlide = function (position) {
  for (let index = 0; index < perforatorSliderHeaders.length; index++) {
    if (perforatorSliderHeaders[index].classList.contains('active-slide')) {
      perforatorSliderHeaders[index].classList.remove('active-slide');
    }
  }
  console.log("DDCD");
  perforatorSliderHeaders[position].classList.add('active-slide');
}
sliderLeftButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeSlide(-1);
});
sliderRightButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeSlide(1);
});
(function () {
  for (let index = 0; index < perforatorSwitches.length; index++) {
    perforatorSwitches[index].addEventListener('click', function (evt) {
      evt.preventDefault();
      for (let index = 0; index < perforatorSwitches.length; index++) {
        if (perforatorSwitches[index].classList.contains('slider-active-switch')) {
          perforatorSwitches[index].classList.remove('slider-active-switch');
          break;
        }
      }
      this.classList.add('slider-active-switch');
      const arr = Array.prototype.slice.call(perforatorSwitches);
      setCurrentSlide(arr.indexOf(this));
    });
  }
}
)();

let setCurrentServiceContent = function (position) {
  for (let index = 0; index < servicesContent.length; index++) {
    if (servicesContent[index].classList.contains('service-item-current')) {
      servicesContent[index].classList.remove('service-item-current');
    }
  }
  servicesContent[position].classList.add('service-item-current');
};
(function () {
  for (let index = 0; index < serviceSwitches.length; index++) {
    serviceSwitches[index].addEventListener('click', function (evt) {
      evt.preventDefault();
      for (let index = 0; index < serviceSwitches.length; index++) {
        if (serviceSwitches[index].classList.contains('active-service')) {
          serviceSwitches[index].classList.remove('active-service');
          break;
        }
      }
      const arr = Array.prototype.slice.call(serviceSwitches);
      setCurrentServiceContent(arr.indexOf(this));
      this.classList.add('active-service');
    });
  }
})();
