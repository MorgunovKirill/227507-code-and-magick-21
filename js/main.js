'use strict';

(function () {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const setup = document.querySelector(`.setup`);
  const similarListElement = document.querySelector(`.setup-similar-list`);
  let wizards = [];

  const successHandler = (data) => {
    wizards = data;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(window.setup.renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };


  const errorHandler = function (errorMessage) {
    window.util.createErrorMessage(errorMessage);
  };


  window.backend.load(successHandler, errorHandler);

})();
