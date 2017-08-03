import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  // debugger
  // game.startRound();
  // debugger

  handleInput(game);
});

const handleInput = (game) => {
  document.getElementsByTagName('body')[0].addEventListener('keydown', (e) => {
    game.handleInput(e);
  });
};
