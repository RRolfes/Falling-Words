import render from './environment';
import Target from './target';

class Game {
  constructor() {
    const canvas = document.getElementById('canvas');
    this.screenWidth = canvas.width;
    this.screenHeight = canvas.height;

    this.targets = [];

    render(this);
    this.startRound = this.startRound.bind(this);
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

  removeTarget(target) {
    const idx = this.targets.indexOf(target);
    this.targets.splice(idx, 1);
    debugger
  }



}

export default Game;
