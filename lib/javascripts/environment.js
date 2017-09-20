let canvas, ctx, background, currentGame, screenWidth, screenHeight;

function render(game) {
  currentGame = game;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  screenWidth = canvas.width;
  screenHeight = canvas.height;

  window.requestAnimationFrame(renderRepaint);
}

// This is the where the recursive call to rAF() happens
function renderRepaint() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let background1 = document.getElementById("background");
  ctx.drawImage(background1, 0, 0, 900, 635);
  renderWords();
  displayGameInfo();

  window.requestAnimationFrame(() => renderRepaint());
}

const renderWords = () => {
  currentGame.targets.forEach((target) => {

    ctx.font = "30px Verdana";
    ctx.fillText(target.target, target.x, target.y);

    if (target.y === canvas.height - 33) {
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
    currentGame.answer = '';
    ctx.fillText("Game Over!", screenWidth/2, screenHeight/2);
    ctx.fillText("Press space to restart", screenWidth/2, screenHeight/2 + 30);
  }
};

export default render;
