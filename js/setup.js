'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb (101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_QUANTITY = 4;
const WIZARD_FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);
const setupName = setup.querySelector(`.setup-user-name`);
const setupWizard = setup.querySelector(`.setup-wizard`);
const setupWizardCoat = setupWizard.querySelector(`.wizard-coat`);
const setupWisardCoatInput = setup.querySelector(`input[name=coat-color]`);
const setupWizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const setupWisardEyesInput = setup.querySelector(`input[name=eyes-color]`);
const setupFireball = setup.querySelector(`.setup-fireball-wrap`);
const setupFireballInput = setup.querySelector(`input[name=fireball-color]`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const onPopupEscPress = function (evt) {
  if ((document.activeElement !== setupName) && (evt.key === `Escape`)) {
    evt.preventDefault();
    closePopup();
  }
};

const onPopupEnterPress = function (evt) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
  setupName.addEventListener(`keydown`, onPopupEnterPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
  setupName.removeEventListener(`keydown`, onPopupEnterPress);
};


const getRandomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomItem = (arr) => {
  return arr[getRandomInteger(0, arr.length - 1)];
};

const generateWisard = (name, surname, coat, eyes) => {
  return {
    name: getRandomItem(name) + ` ` + getRandomItem(surname),
    coat: getRandomItem(coat),
    eyes: getRandomItem(eyes)
  };
};

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyes;

  return wizardElement;
};

const renderFragment = (arr, renderPlace) => {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }

  renderPlace.appendChild(fragment);
};

const wizards = [];

for (let i = 0; i < WIZARD_QUANTITY; i++) {
  wizards.push(generateWisard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES));
}


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

setupWizardCoat.addEventListener(`click`, function () {
  setupWizardCoat.style.fill = getRandomItem(WIZARD_COATS);
  setupWisardCoatInput.value = setupWizardCoat.style.fill;
});

setupWizardEyes.addEventListener(`click`, function () {
  setupWizardEyes.style.fill = getRandomItem(WIZARD_EYES);
  setupWisardEyesInput.value = setupWizardEyes.style.fill;
});

setupFireball.addEventListener(`click`, function () {
  setupFireball.style.background = getRandomItem(WIZARD_FIREBALL_COLORS);
  setupFireballInput.value = setupFireball.style.background;
});


renderFragment(wizards, similarListElement);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
