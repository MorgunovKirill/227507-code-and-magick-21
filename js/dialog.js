'use strict';

(function () {
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = window.util.setup.querySelector(`.setup-close`);
  const setupName = window.util.setup.querySelector(`.setup-user-name`);

  const onPopupEscPress = function (evt) {
    if (document.activeElement !== setupName) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  const onPopupEnterPress = function (evt) {
    window.util.isEnterEvent(evt);
  };

  const openPopup = function () {
    window.util.setup.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);
    setupName.addEventListener(`keydown`, onPopupEnterPress);
  };

  const closePopup = function () {
    window.util.setup.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onPopupEscPress);
    setupName.removeEventListener(`keydown`, onPopupEnterPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      openPopup();
    }
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      closePopup();
    }
  });
})();
