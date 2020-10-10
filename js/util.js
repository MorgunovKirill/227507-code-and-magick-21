'use strict';

(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;
  const setup = document.querySelector(`.setup`);

  window.util = {
    isEscEvent: (evt, action) => {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        action();
      }
    },
    isEnterEvent: (evt) =>{
      if (evt.keyCode === ENTER_KEYCODE) {
        evt.preventDefault();
      }
    },
    getRandomInteger: (min, max) => {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
    getRandomItem: (arr) => {
      return arr[window.util.getRandomInteger(0, arr.length - 1)];
    },
    colorize: (element, input, colors) => {
      element.addEventListener(`click`, function () {
        const color = window.util.getRandomItem(colors);
        if (element.tagName.toLowerCase() === `div`) {
          element.style.backgroundColor = color;
        } else {
          element.style.fill = color;
        }
        input.value = color;
      });
    },
    setup,
  };
})();


