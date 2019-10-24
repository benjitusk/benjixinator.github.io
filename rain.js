let dropsA = [];
let first = true;
let repelRadius = 100;
let ball;
let running = true;
let scene = 1;
let totalDrops = 200;


function setup() {
    createCanvas(windowWidth, windowHeight);
    mouseX = width / 2;
    mouseY = height / 3;
    for (let i = 0; i < totalDrops; i++) {
        dropsA[i] = new Drop();
    }
    ball = new Ball();

}

function draw() {
    
    if (scene === 0) {
        background(0);
        textSize(42);
        fill(255);
        textAlign(CENTER);
        text("Welcome to...");
        text("STAY DRY");
    }
    
    if (scene === 1) {
        backgroundSetup();
        ball.show();
        
        if (ball.health <= 0) gameOver();
        
        for (let drop of dropsA) {
            drop.fall();
            drop.show();
            
            let umbrellaDist = dist(drop.pos.x, drop.pos.y, mouseX, height / 3);
            if (umbrellaDist < repelRadius + drop.len) { // if the bottom of the drop is within repelRadius of the mouse
                drop.repel();
            }
            
            let ballDist = dist(drop.pos.x, drop.pos.y, ball.x, ball.y);
            if (ballDist < ball.r) {
                ball.health--;
            }
            
        }
        
    }
}

function backgroundSetup() {
    background(0);
    fill(255);
    textSize(60);
    textAlign(LEFT);
    text("TIME: ", 10, 10);
    noFill();
    stroke(255);
    strokeWeight(7);
    arc(mouseX, height * 2 / 3, repelRadius * 2, repelRadius * 2, 7 / 6 * PI, 11 / 6 * PI);

    stroke(255, 0, 0);
    line(0, height * 11 / 12, width, height * 11 / 12);
    stroke(0, 255, 0);
    line(-10, height * 11 / 12, map(ball.health, 0, 100, 0, width), height * 11 / 12);
}

function gameOver() {
    
    running = false;

}
