'use strict';
(function () {
  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const SHIFT = 10;
  const FONT_GAP = 15;
  const BAR_HEIGHT = 150;
  const COLUMN_GAP = 50;
  const BAR_WIDTH = 40;
  const PLAYER_BAR_COLOR = `rgba(255, 0, 0, 1)`;
  const DEFAULT_FILL_STYLE = `#000000`;

  const renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + SHIFT, CLOUD_Y + SHIFT, `rgba(0, 0, 0, 0.7)`);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

    ctx.fillStyle = DEFAULT_FILL_STYLE;
    ctx.font = `16px PT Mono`;
    ctx.fillText(`Ура вы победили!`, CLOUD_X + SHIFT * 2, CLOUD_Y + FONT_GAP + SHIFT);
    ctx.fillText(
        `Список результатов:`,
        CLOUD_X + SHIFT * 2,
        CLOUD_Y + FONT_GAP + SHIFT * 3
    );

    const maxTime = times.reduce(function (a, b) {
      return Math.max(a, b);
    });


    for (let i = 0; i < names.length; i++) {
      ctx.fillStyle = DEFAULT_FILL_STYLE;

      ctx.fillText(
          names[i],
          CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i,
          CLOUD_HEIGHT - CLOUD_Y
      );

      let columnHeight = (BAR_HEIGHT * times[i]) / maxTime;

      ctx.fillText(
          times[i].toFixed(0),
          CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i,
          CLOUD_HEIGHT - CLOUD_Y - columnHeight - SHIFT * 3
      );

      ctx.fillStyle = names[i] === `Вы` ? PLAYER_BAR_COLOR : `hsl(240, ${100 * Math.random()}%, 50%)`;

      ctx.fillRect(
          CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i,
          CLOUD_HEIGHT - CLOUD_Y - columnHeight - SHIFT * 2,
          BAR_WIDTH,
          columnHeight
      );
    }
  };
})();
