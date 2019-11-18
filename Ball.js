class Ball {
    constructor() {
        this.r = 20;
        this.x = mouseX;
        this.y = mouseY;
        this.health = 100;
    }
    
    update() {
        this.x = mouseX;
        this.y = mouseY;
    }
    
    show() {
	    noStroke();
     	fill(0, 0, 255);
        ellipse(this.x, this.y, this.r * 2);
    }
}
