'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb (101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_QUANTITY = 4;

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

const setupWindow = document.querySelector(`.setup`);
setupWindow.classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

renderFragment(wizards, similarListElement);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
