'use strict';

const DEFAULT_WIZARD_COAT = `rgb(101, 137, 164)`;
const DEFAULT_WIZARD_EYES = `black`;

let coatColor = DEFAULT_WIZARD_COAT;
let eyesColor = DEFAULT_WIZARD_EYES;
let wizards = [];

const getRank = function (wizard) {

  let rank = 0;

  if (wizard.colorCoat === coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === eyesColor) {
    rank += 1;
  }

  return rank;
};

const namesComparator = function (left, right) {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
};

const updateWizards = () => {
  window.render.renderFragment(wizards.sort(function (left, right) {
    let rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  }));
};

window.wizard.setEyesChangeHandler(function (color) {
  eyesColor = color;
  window.util.debounce(updateWizards);
});

window.wizard.setCoatChangeHandler(function (color) {
  coatColor = color;
  window.util.debounce(updateWizards);
});

const successHandler = (data) => {
  wizards = [...data];
  updateWizards();
};


const errorHandler = function (errorMessage) {
  window.util.createErrorMessage(errorMessage);
};

window.backend.load(successHandler, errorHandler);

