'use strict';
(function () {
  const URL = `https://21.javascript.pages.academy/code-and-magick`;

  window.save = function (data, onSuccess) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      onSuccess(xhr.response);
    });

    xhr.open(`POST`, URL);
    xhr.send(data);
  };

  window.load = function (onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.open(`GET`, URL);

    xhr.addEventListener(`load`, function () {
      onSuccess(xhr.response);
      console.log(xhr.response);
    });

    xhr.send();
  };
})();
