let dropsA = [];
let first = true;
let repelRadius = 100;
let ball;
let running = true;
let scene = 0;
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
    console.log("<= FRAME NUMBER");
    background(0);
    textAlign(CENTER);
     {
    if (scene === 0) { // Welcome
      ball.health = 100;
      noStroke();
      textSize(50);
      fill(255, 60, 60);
      text("You are finally awake. That is good...", width / 2, (height / 2) - 42);
      text("Come, my child...", width / 2, (height / 2) + 42);
    }

    if (scene === 1) {
      textSize(36);
      fill(255);
      text("I'm sorry, sir, I think this must be some sort of mistake.\nI don't know what's happening. I don't even know who you are! Where am I?", width / 2, (height / 2) - 42);
    }

    if (scene === 2) {
      text("...", width / 2, (height / 2) + 42);
    }

    if (scene === 3) {
      textSize(18);
      text("Who am I?", width / 2, (height / 2) + 42);
    }

    if (scene === 4) {
      textSize(50);
      fill(255, 60, 60);
      text("You are The Chosen One! Everyone knows who you are!\nAs for who am I, I wouldn't dwell too long on that\nif I were you, for your own safety.\n\nThe hour is late, and the sun has set.\n\nLET US BEGIN...", width / 2, height / 2.5);
    }

    if (scene === 5) { // How to
      textSize(50);
      fill(255, 60, 60);
      text("The goal is simple enough:\nThe umbrella is controlled by the mouse.\nDo you have what it takes to...\nSTAY DRY", width / 2, (height / 2) - 42);
    }

    if (scene === 6) { // How to
      textSize(72);
      fill(255, 0, 0);
      text("...AND ALIVE...", width / 2, (height / 2) - 42);
    }

  }

    if (scene === 7) { // Play Ball!
        backgroundSetup();
        ball.show();

        if (ball.health <= 0) scene = 9;

        for (let drop of dropsA) {
            drop.fall();
            drop.show();

            let umbrellaDist = dist(drop.pos.x, drop.pos.y, mouseX, height * 2 / 3);
            if (umbrellaDist < repelRadius + drop.len) { // if the bottom of the drop is within repelRadius of the mouse
                drop.repel();
            }

            let ballDist = dist(drop.pos.x, drop.pos.y, ball.x, ball.y);
            if (ballDist < ball.r) {
                ball.health--;
            }

        }

    }

    if (scene === 8) { // Time Out!
      for (let drop of dropsA) {
          drop.fall();
          drop.show();
        }
      fill(255);
      noStroke();
      textSize(60);
      text("Paused...", width / 2, height / 2 - 30);
      // text("Click anywhere to continue", width / 2, height / 2 + 30);
    }

    if (scene === 9) { // Game Over!
      stroke(255, 0, 0);
      noFill();
      textSize(72)
      //text("GAME OVER", width / 2, height / 3 - 36);
      textSize(42);
      text("You...\nYou have not cared for my treasured ball with enough care...\n and now...\n and now it is lost forever.\n\n\nYou will rue this day forever, fool...\nMark my words...", width / 2, height / 3 - 30);
      // horrorScene()?
    }

    if (scene === 10) {
      background(255, 0, 0)
      textSize(100);
      fill(255    );
      text("GAME\nOVER", width / 2, (height / 2) - 42);

    }


}

function backgroundSetup() {
    noFill();
    stroke(255);
    strokeWeight(7);
    arc(mouseX, height * 2 / 3, repelRadius * 2, repelRadius * 2, 7 / 6 * PI, 11 / 6 * PI);

    stroke(255, 0, 0);
    line(0, height * 11 / 12, width, height * 11 / 12);
    stroke(0, 255, 0);
    line(-10, height * 11 / 12, map(ball.health, 0, 100, 0, width), height * 11 / 12);
}


function mousePressed() {

  if (scene === 10) {
    scene = 0;
  } else if (scene === 8) {
    scene = 7;
  } else {
    scene ++;
  }

}

(function theLoop (i) {
  setTimeout(function () {

    if (--i) {          // If i > 0, keep going
      theLoop(i);       // Call the loop again, and pass it the current value of i
    }
  }, 3000);
})(10);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
