//PowerUp class
class Cheese {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.dy = dy;
    this.width = 60;
    this.height = 40;
    this.img = new Image();
    this.img.src = "./../images/cheese.png";
  }

  drawCheese() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  setRandomPosition() {
    this.x = Math.floor(Math.random() * 400);
    this.y = Math.floor(Math.random() * 600);
  }

  cheeseCollision(player) {
    return !(
      player.x > this.x + this.width - 10 ||
      player.x + player.width - 10 < this.x ||
      player.y > this.y + this.height - 10 ||
      player.y + player.height - 10 < this.y
    );
  }
}
