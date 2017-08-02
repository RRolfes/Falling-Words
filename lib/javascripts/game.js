import render from './environment';
import Target from './target';

class Game {
  constructor() {
    const canvas = document.getElementById('canvas');
    this.screenWidth = canvas.width;
    this.screenHeight = canvas.height;

    render(this);
    this.startRound = this.startRound.bind(this);
    this.startRound();

  }

  startRound() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    // ctx.clearRect(0, 0, c.width, c.height);

    this.count = 4;
    this.dropInterval = 1000;

    this.roundLoop = setInterval(() => {
      ctx.clearRect(0, 0, c.width, c.height);
      if (this.count > 0) {
        const target = new Target();
        // console.log(target);
        // target.drop.bind(target);
        this.count--;
      } else {
        clearInterval(this.roundLoop);
      }
    }, this.dropInterval);
  }
}

export default Game;
