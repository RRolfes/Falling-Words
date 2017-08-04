
const words = ['a', 'be', 'see', 'deed', 'fifth', 'sixths', 'seventh'];


class Target {
  constructor() {
    this.screenWidth = 900;

    this.target = words[Math.floor(Math.random() * words.length)];

    this.x = Math.random() * (this.screenWidth - 100) + 25;
    this.y = 0;

    this.solved = false;

    this.speed = 20;

    this.drop();

  }

  drop() {
    const fallSpeed = setInterval(() => {
      this.y += 1.5;
    }, this.speed);
  }

  // hitBottom(screenHeight) {
  //   return this.y > screenHeight - 30;
  // }

}

export default Target;
