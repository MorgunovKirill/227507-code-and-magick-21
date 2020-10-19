'use strict';

(function () {

  const WIZARD_COATS = [
    `rgb(146, 100, 161)`,
    `rgb(215, 210, 55)`,
    `rgb(241, 43, 107)`,
    `rgb(101, 137, 164)`,
    `rgb(0, 0, 0)`,
    `rgb(215, 210, 55)`,
    `rgb(56, 159, 117)`,
    `rgb(241, 43, 107)`];

  const WIZARD_EYES = [
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `lightblue`,
    `blue`,
    `purple`];

  const WIZARD_FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  let wizard = {};

  const setup = document.querySelector(`.setup`);
  const setupWizard = setup.querySelector(`.setup-wizard`);
  const setupWizardCoat = setupWizard.querySelector(`.wizard-coat`);
  const setupWisardCoatInput = setup.querySelector(`input[name=coat-color]`);
  const setupWizardEyes = setupWizard.querySelector(`.wizard-eyes`);
  const setupWisardEyesInput = setup.querySelector(`input[name=eyes-color]`);
  const setupFireball = setup.querySelector(`.setup-fireball-wrap`);
  const setupFireballInput = setup.querySelector(`input[name=fireball-color]`);

  const colorize = (element, input, colors) => {
    element.addEventListener(`click`, function () {
      const newColor = window.util.getRandomItem(colors);
      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = newColor;
      } else {
        element.style.fill = newColor;

        if (element.classList.contains(`wizard-coat`)) {
          wizard.onCoatChange(newColor);
        }
        if (element.classList.contains(`wizard-eyes`)) {
          wizard.onEyesChange(newColor);
        }
      }
      input.value = newColor;
    });
  };

  const setCoatChangeHandler = (cb) => {
    wizard.onCoatChange = cb;
  };

  const setEyesChangeHandler = (cb) => {
    wizard.onEyesChange = cb;
  };

  colorize(setupWizardCoat, setupWisardCoatInput, WIZARD_COATS);

  colorize(setupWizardEyes, setupWisardEyesInput, WIZARD_EYES);

  colorize(setupFireball, setupFireballInput, WIZARD_FIREBALL_COLORS);

  window.wizard = {
    setCoatChangeHandler,
    setEyesChangeHandler
  };

})();
