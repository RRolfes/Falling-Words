import * as Stages from './stages';
import render from './environment';
import Target from './target';

class Game {
  constructor() {
    const canvas = document.getElementById('canvas');
    this.screenWidth = canvas.width;
    this.screenHeight = canvas.height;

    this.reset();

    render(this);
    this.startRound(this.lives);

  }

  reset() {
    this.targets = [];
    this.score = 0;
    this.answer = '';
    this.lives = 3;
    this.stage = Stages.NOT_STARTED;
  }

  startRound(lives) {
    this.count = 1;
    this.lives = lives;
    this.dropInterval = 1000 - (this.score);

    this.roundLoop = setInterval(() => {
      if (this.lives > 0 && this.count % 2 !== 0) {

        const target = new Target();
        this.targets.push(target);

        target.drop();
        this.count++;

      } else {
        clearInterval(this.roundLoop);
        this.startRound(this.lives);
      }
    }, this.dropInterval);
  }


  handleInput(e) {
    const keyCode = e.which;

    if (this.lives > 0) {
      if (keyCode >= 65 && keyCode <= 90){
        this.answer += e.key;
      } else if (keyCode === 8) {
        this.answer = this.answer.slice(0, -1);
      } else if (keyCode === 13) {
        this.checkInput(this.answer);
        this.answer = "";
      }
    } else if (keyCode === 32 ) {
      window.location.reload();
    }
  }

  removeTarget(target) {
    const idx = this.targets.indexOf(target);
    this.targets.splice(idx, 1);

    if (this.lives === 0) {
      this.targets = [];
    }
  }

  checkInput(input) {
    this.targets.forEach((target) => {
      if ( input === target.target ) {
        this.score += 10;
        target.solved = true;
      }
    });
  }

}

export default Game;
