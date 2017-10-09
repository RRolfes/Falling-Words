import * as Stages from './stages';

let canvas, ctx, background, currentGame, screenWidth, screenHeight;

function render(game) {
  currentGame = game;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  screenWidth = canvas.width;
  screenHeight = canvas.height;

  window.requestAnimationFrame(renderRepaint);
}

// note test
// This is where the recursive call to rAF() happens
function renderRepaint() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  renderBackground();

  switch(currentGame.stage){
    case Stages.NOT_STARTED:
      renderInstructions();
      break;

    case Stages.PLAYING:
      renderWords();
      break;
  }

  // put two below in case stages.PLAYING:
  // renderWords();
  displayGameInfo();

  window.requestAnimationFrame(() => renderRepaint());
}

const renderOverlay = () => {
  ctx.fillStyle = "rgba(100, 100, 100, 0.7)";
  ctx.fillRect(0, 0, currentGame.screenWidth, currentGame.screenHeight);
};

const renderInstructions = () => {
  ctx.font = 44;
  ctx.fillText("Instructions:", currentGame.screenWidth / 2, 180);

  ctx.font = 15;
  ctx.fillText("Type the words that appear on-screen and", currentGame.screenWidth / 2, 220);
  ctx.fillText("hit ENTER before they reach the ground", currentGame.screenWidth / 2, 250);

  // ctx.fillText("Press ENTER to submit a word", currentGame.screenWidth / 2, 270);
  // ctx.fillText("before it reaches the ground", currentGame.screenWidth / 2, 295);

  ctx.fillText("Press ESCAPE at any", currentGame.screenWidth / 2, 370);
  ctx.fillText("time to pause the Game", currentGame.screenWidth / 2, 395);
};

const renderBackground = () => {
  background = document.getElementById("background");
  ctx.drawImage(background, 0, 0, 900, 635);
};

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
