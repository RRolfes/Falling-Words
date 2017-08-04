import render from './environment';
import Target from './target';

class Game {
  constructor() {
    const canvas = document.getElementById('canvas');
    this.screenWidth = canvas.width;
    this.screenHeight = canvas.height;

    this.targets = [];
    this.score = 0;
    this.answer = '';

    render(this);
    // this.startRound = this.startRound.bind(this);
    this.startRound();

  }

  startRound() {
    this.count = 0;
    this.lives = 3;
    this.dropInterval = 2000;

    this.roundLoop = setInterval(() => {
      if (this.lives > 0) {
        console.log(this.count);
        const target = new Target();
        this.targets.push(target);
        // console.log(this.targets);
        target.drop();
        this.count++;
        // if (this.count % 2 === 0) {
        //   this.dropInterval += 2000;
        //   console.log(this.dropInterval);
        // }
      } else {
        clearInterval(this.roundLoop);
      }
    }, this.dropInterval);

  }


  handleInput(e) {
    const keyCode = e.which;
    // console.log(keyCode);

    if (this.lives > 0) {
      console.log(keyCode);
      if (keyCode >= 65 && keyCode <= 90){
        this.answer += e.key;
      } else if (keyCode === 8) {
        this.answer = this.answer.slice(0, -1);
      } else if (keyCode === 13) {
        this.checkInput(this.answer);
        this.answer = "";
      }
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
    console.log(input);
    this.targets.forEach((target) => {
      if ( input === target.target ) {
        this.score += 10;
        target.solved = true;
      }
    });
    console.log(this.score);
  }



}

export default Game;
