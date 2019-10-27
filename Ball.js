class Ball {
    constructor() {
        this.xoff = random(0, 999999);
        this.r = 20;
        this.x = width / 2;
        this.y = (height * 11 / 12) - this.r;
        this.health = 100;
    }
    
    show() {
        if (running) {
            this.xoff += 0.1;
            if (this.x <= 0) { // If the ball is in danger of going off the screen to the <<LEFT
                this.x = 5;
            } else if (this.x >= width) { // If the ball is in danger of going off the screen to the RIGHT>>
                this.x = width - 5;
                console.log(this.x);
            } else { // If the ball is in the <<CENTER>>
                this.x += map(noise(this.xoff), 0, 1, -5, 6.8);
            }
        }
            noStroke();
            fill(138, 43, 226);
            ellipse(this.x, this.y - (this.r / 5), this.r * 2);
    }
}
