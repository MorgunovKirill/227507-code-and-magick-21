'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb (101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];

const getRandomItem = (arr) => {
  return arr[Math.floor(arr.length * Math.random())];
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

const wizards = [];

wizards.push(generateWisard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES));
wizards.push(generateWisard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES));
wizards.push(generateWisard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES));
wizards.push(generateWisard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES));


const setupWindow = document.querySelector(`.setup`);
setupWindow.classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
