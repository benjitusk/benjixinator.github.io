class Ball {
    constructor() {
        this.r = 20;
        this.x = mouseY;
        this.y = mouseX;
        this.health = 100;
    }
    
    update() {
        this.x = mouseY;
        this.y = mouseX;
    }
    
    show() {
     
        ellipse(this.x, this.y, this.r * 2);
    }
}
