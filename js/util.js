'use strict';

(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;
  const DEBOUNCE_INTERVAL = 300; // ms
  let lastTimeout;

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

  const debounce = (cb) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };

  window.util = {
    isEscEvent,
    isEnterEvent,
    getRandomInteger,
    getRandomItem,
    createErrorMessage,
    debounce
  };
})();


