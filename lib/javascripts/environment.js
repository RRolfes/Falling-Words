let canvas, ctx, city, game;

function render(g) {
  game = g;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  city = document.getElementById('city');
  window.requestAnimationFrame(renderFrame);
}

function renderFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  renderBackground();

  // switch (game.stage) {
  //   case Stages.NOT_STARTED:
  //     renderTitleScreen();
  //     break;
  //
  //   case Stages.PLAYING:
  //     renderMissiles();
  //     renderHud();
  //     break;
  //
  //   case Stages.PAUSED:
  //     renderPauseScreen();
  //     break;
  //
  //   case Stages.WAVE_LOST:
  //     renderGameOverScreen();
  //     break;
  //
  //   case Stages.WAVE_WON:
  //     renderWaveCompleteScreen();
  //     break;
  // }

  // Testing only. Show game stage
  // ctx.fillText(game.stage, 20, 20);

  window.requestAnimationFrame(() => renderFrame());
}

const renderBackground = () => {
  ctx.drawImage(city, 0, 0, canvas.width, canvas.height);
};

export default render;
