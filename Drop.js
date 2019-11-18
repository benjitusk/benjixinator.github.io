class Drop {
    constructor () {
        this.pos = createVector(random(width), random(-height - 50, -50));
	this.len = 5;
	this.speed = 13;
    }
    
    fall() {
        this.pos.y += this.speed;
        if (this.pos.y > height) {
            // Randomize the drop
            this.pos = createVector(random(width), random(-height - 50, -50));
        }
    }
    
    show() {
        stroke(0, 200, 255);
        strokeWeight(5);
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.len);
    }
    
    repel() {
        if (this.pos.x <= mouseX) {     // if drop is to the left of the mouse
            this.pos.x -= this.speed;            // push it to the left
        } else {                        // and if it's to the right, 
            this.pos.x += this.speed;            // push it to the right
        }
    }
}
