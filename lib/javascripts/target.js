
// const words = ['a', 'be', 'see', 'deed', 'fifth', 'sixths', 'seventh'];
const words = ['a', 'be', 'see', 'deed', 'fifth', 'sixths', 'seventh'];
const level = 1;

class Target {
  constructor() {
    this.screenWidth = 900;
    // get the word that will be the target
    // need library of words
    // font size?
    this.target = words[Math.floor(Math.random() * words.length)];

    // where to start (math to have words appear from all over top of screen)
    this.x = Math.random() * (this.screenWidth - 50) + 25;
    this.y = 0;

    this.solved = false;

    // import level
    this.speed = (level * 20);

    this.drop();

  }

  drop() {
    const fallSpeed = setInterval(() => {
      this.y += 1;
      // this.draw();
    }, this.speed);
  }

  hitBottom(screenHeight) {
    return this.y > screenHeight;
  }

  // draw() {
  //   var c = document.getElementById("canvas");
  //   var ctx = c.getContext("2d");
  //   ctx.font = "30px Arial";
  //   // ctx.clearRect(0, 0, c.width, c.height);
  //   ctx.fillText(this.target, this.x, this.y);
  // }

}

export default Target;
