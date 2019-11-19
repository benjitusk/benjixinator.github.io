class Drop {
    constructor () {
        this.pos = createVector(random(width), random(-height - 50, -50));
        this.speed = random(5, 20);
        this.len = random(10, 20);
        this.c = color(random(255), random(255), random(255));
    }
    
    fall() {
        this.pos.y += this.speed;
        
        if (this.pos.y > height) {
            // Randomize and reconstruct the drop
            this.pos = createVector(random(width), random(-height - 50, -50));
            this.speed = random(5, 20);
            this.len = random(10, 20);
            this.c = color(random(255), random(255), random(255));
        }
        
    }
    
    show() {
        stroke(this.c);
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
