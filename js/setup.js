'use strict';

(function () {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARD_COATS = [`rgb (101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
  const WIZARD_FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const WIZARD_QUANTITY = 4;

  const setupWizard = window.util.setup.querySelector(`.setup-wizard`);
  const setupWizardCoat = setupWizard.querySelector(`.wizard-coat`);
  const setupWisardCoatInput = window.util.setup.querySelector(`input[name=coat-color]`);
  const setupWizardEyes = setupWizard.querySelector(`.wizard-eyes`);
  const setupWisardEyesInput = window.util.setup.querySelector(`input[name=eyes-color]`);
  const setupFireball = window.util.setup.querySelector(`.setup-fireball-wrap`);
  const setupFireballInput = window.util.setup.querySelector(`input[name=fireball-color]`);

  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);


  const generateWisard = (name, surname, coat, eyes) => {
    return {
      name: window.util.getRandomItem(name) + ` ` + window.util.getRandomItem(surname),
      coat: window.util.getRandomItem(coat),
      eyes: window.util.getRandomItem(eyes)
    };
  };

  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyes;

    return wizardElement;
  };

  // const renderFragment = (arr, renderPlace) => {
  //   let fragment = document.createDocumentFragment();

  //   for (let i = 0; i < arr.length; i++) {
  //     fragment.appendChild(renderWizard(arr[i]));
  //   }

  //   renderPlace.appendChild(fragment);
  // };

  // const wizards = [];

  // for (let i = 0; i < WIZARD_QUANTITY; i++) {
  //   wizards.push(generateWisard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES));
  // }

  window.load(function (wizards) {
    const fragment = document.createDocumentFragment();
    console.log(wizards);

    for (let i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.util.setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  }, function () {});

  // renderFragment(wizards, similarListElement);

  document.querySelector(`.setup-similar`).classList.remove(`hidden`);

  window.util.colorize(setupWizardCoat, setupWisardCoatInput, WIZARD_COATS);

  window.util.colorize(setupWizardEyes, setupWisardEyesInput, WIZARD_EYES);

  window.util.colorize(setupFireball, setupFireballInput, WIZARD_FIREBALL_COLORS);

})();
