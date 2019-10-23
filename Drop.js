class Drop {

  constructor() {
    this.xoff;
    this.x = random(width);
    this.y = random(-height -50, 0);
    this.len = random(4, 10);
    this.speed = random(5, 20);
    //this.c = color(random(255), random(255), random(255));

  }

  fall() {
    this.y += this.speed;
  }

  show() {
    stroke(255);
    line(this.x, this.y, this.x, this.y - this.len);
  }

}
