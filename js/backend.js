'use strict';

const URL = `https://21.javascript.pages.academy/code-and-magick`;
const URL_DATA = `https://21.javascript.pages.academy/code-and-magick/data`;
const TIMEOUT_IN_MS = 10000;

const StatusCode = {
  OK: 200
};


const statusHandler = (xhr, onLoad, onError) => {
  xhr.addEventListener(`load`, function () {
    if (xhr.status === StatusCode.OK) {
      onLoad(xhr.response);
    } else {
      onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
    }
  });

  xhr.addEventListener(`error`, function () {
    onError(`Произошла ошибка соединения`);
  });

  xhr.addEventListener(`timeout`, function () {
    onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
  });
};

const save = function (data, onLoad, onError) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.open(`POST`, URL);
  xhr.timeout = TIMEOUT_IN_MS;

  statusHandler(xhr, onLoad, onError);
  xhr.send(data);
};

const load = function (onLoad, onError) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.open(`GET`, URL_DATA);
  xhr.timeout = TIMEOUT_IN_MS;

  statusHandler(xhr, onLoad, onError);
  xhr.send();
};

window.backend = {
  save,
  load
};
