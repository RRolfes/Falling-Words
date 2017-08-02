let canvas, ctx, background, currentGame;

function render(game) {
  currentGame = game;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  // background = document.getElementById('background');
  window.requestAnimationFrame(renderRepaint);
}

function renderRepaint() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  renderBackground();


  window.requestAnimationFrame(() => renderRepaint());
}

const renderBackground = () => {
  ctx.drawImage(0, 0, canvas.width, canvas.height);
};

export default render;
