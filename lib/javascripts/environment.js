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


  renderWords();

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
      currentGame.points += 10; //add logic for increasing points
    }

  });
};

export default render;
