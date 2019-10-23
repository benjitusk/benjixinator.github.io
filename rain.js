let dropsA = [];
let totalDrops = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < totalDrops; i ++) {
    dropsA[i].push(new Drop());
  }
}

function draw() {
  background(0);

  for (let drop of dropsA) {
    
    drop.fall();
    drop.show();

  }

}
