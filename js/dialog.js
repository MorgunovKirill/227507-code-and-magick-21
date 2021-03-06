'use strict';

const setupDialogElement = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setupDialogElement.querySelector(`.setup-close`);
const setupName = setupDialogElement.querySelector(`.setup-user-name`);

const dialogHandle = setupDialogElement.querySelector(`.upload`);
const form = setupDialogElement.querySelector(`.setup-wizard-form`);
let initialCoords;

const onPopupEscPress = function (evt) {
  if (document.activeElement !== setupName) {
    window.util.isEscEvent(evt, closePopup);
  }
};

const onPopupEnterPress = function (evt) {
  window.util.isEnterEvent(evt);
};


const openPopup = function () {
  setupDialogElement.classList.remove(`hidden`);

  if (!initialCoords) {
    initialCoords = {
      x: setupDialogElement.style.left,
      y: setupDialogElement.style.top,
    };
  }

  setupDialogElement.style.left = initialCoords.x;
  setupDialogElement.style.top = initialCoords.y;

  document.addEventListener(`keydown`, onPopupEscPress);
  setupName.addEventListener(`keydown`, onPopupEnterPress);
};

const closePopup = function () {
  setupDialogElement.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
  setupName.removeEventListener(`keydown`, onPopupEnterPress);
};

setupOpen.addEventListener(`click`, openPopup);

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, closePopup);

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

dialogHandle.addEventListener(`mousedown`, function (evt) {
  evt.preventDefault();

  let startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  let dragged = false;

  const onMouseMove = (moveEvt) => {
    moveEvt.preventDefault();

    dragged = true;

    let shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + `px`;
    setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + `px`;
  };

  const onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener(`mousemove`, onMouseMove);
    document.removeEventListener(`mouseup`, onMouseUp);

    if (dragged) {
      const onClickPreventDefault = (clickEvt) => {
        clickEvt.preventDefault();
        dialogHandle.removeEventListener(`click`, onClickPreventDefault);
      };
      dialogHandle.addEventListener(`click`, onClickPreventDefault);
    }
  };

  document.addEventListener(`mousemove`, onMouseMove);
  document.addEventListener(`mouseup`, onMouseUp);
});


form.addEventListener(`submit`, function (evt) {
  evt.preventDefault();
  window.backend.save(new FormData(form), function () {
    setupDialogElement.classList.add(`hidden`);
  });
});


