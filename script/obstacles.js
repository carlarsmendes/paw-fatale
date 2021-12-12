//Obstacles class
class Obstacles {
  constructor(x, y, width, height, side) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.forward = true;
    this.speed = -0.2;
    this.obstImg = new Image();
    this.obstImg.src = "./../images/cat-paw_ex.png";

    this.obstImgRight = new Image();
    this.obstImgRight.src = "./../images/cat-paw_ex_right.png";
    this.side = side;
  }

  moveObstacles() {
    this.y -= this.speed;
  }

  drawObst() {
    ctx.drawImage(this.obstImg, this.x, this.y, this.width, this.height);
    // ctx.fillStyle = "white";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  drawObstRight() {
    ctx.drawImage(this.obstImgRight, this.x, this.y, this.width, this.height);
  }
}
