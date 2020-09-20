'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR__HEIGHT = 150;
const COLUMN_GAP = 50;
const BAR__WIDTH = 40;
const PLAYER__BAR__COLOR = 'rgba(255, 0, 0, 1)';
let saturation = 100;
let lightness = 50;
let opponentBarColor = `hsl(240, ${saturation}%, ${lightness}%)`;


const renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function(arr) {
  let maxElement = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    maxElement = arr[i];
  }
}
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X , CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP*2, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP*2, CLOUD_Y + FONT_GAP + GAP*3);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';

    ctx.fillText(
      names[i],
      CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR__WIDTH) * i,
      CLOUD_HEIGHT - CLOUD_Y
    );

    let columnHeight = (BAR__HEIGHT * times[i]) / maxTime ;

    ctx.fillText(
      times[i].toFixed(0),
      CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR__WIDTH) * i,
      CLOUD_HEIGHT - CLOUD_Y -  columnHeight - GAP*3,
    );

    if (names[i] === 'Вы') {
      ctx.fillStyle = PLAYER__BAR__COLOR;
    } else {
      ctx.fillStyle =  opponentBarColor;
      saturation = saturation * Math.random();
      lightness = lightness * Math.random();
      opponentBarColor = `hsl(240, ${saturation}%, ${lightness}%)`;
    }

    ctx.fillRect(
      CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR__WIDTH) * i,
      CLOUD_HEIGHT - CLOUD_Y -  columnHeight - GAP*2,
      BAR__WIDTH,
      columnHeight,
    );
  }
};
