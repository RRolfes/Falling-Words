let canvas, ctx, background, currentGame, screenWidth, screenHeight;

function render(game) {
  currentGame = game;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  screenWidth = canvas.width;
  screenHeight = canvas.height;

  // background = document.getElementById('background');
  window.requestAnimationFrame(renderRepaint);
}

function renderRepaint() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  renderWords();
  displayGameInfo();

  // renderBackground();

  window.requestAnimationFrame(() => renderRepaint());
}

// const renderBackground = () => {
//   ctx.drawImage(0, 0, canvas.width, canvas.height);
// };

const renderWords = () => {
  currentGame.targets.forEach((target) => {

    ctx.font="30px Verdana";
    ctx.fillText(target.target, target.x, target.y);

    if (target.y === canvas.height) {
      currentGame.lives--;
      currentGame.removeTarget(target);
    } else if (target.solved) {
      currentGame.removeTarget(target);
    }

  });
};

const displayGameInfo = () => {
  ctx.font="30px Verdana";

  ctx.textAlign="left";
  ctx.fillText(`Score: ${currentGame.score}`, 30, screenHeight - 10);

  ctx.textAlign="right";
  ctx.fillText(`Lives: ${currentGame.lives}`, screenWidth - 30, screenHeight - 10);

  ctx.textAlign="center";
  ctx.fillText(`${currentGame.answer}`, screenWidth/2 , screenHeight - 10);

  if (currentGame.lives === 0) {
    ctx.fillText("Game Over!", screenWidth/2, screenHeight/2);
  }
};

export default render;
