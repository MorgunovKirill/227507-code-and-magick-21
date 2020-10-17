'use strict';

(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  const isEscEvent = (evt, action) => {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      action();
    }
  };

  const isEnterEvent = (evt) =>{
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();
    }
  };

  const getRandomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const getRandomItem = (arr) => {
    return arr[getRandomInteger(0, arr.length - 1)];
  };

  const createErrorMessage = (errorMessage) => {
    const node = document.createElement(`div`);
    node.classList.add(`server-error`);

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.util = {
    isEscEvent,
    isEnterEvent,
    getRandomInteger,
    getRandomItem,
    createErrorMessage
  };
})();


