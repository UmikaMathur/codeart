function setup() {
  createCanvas(500, 500);
  background(200, 10, 100);
  strokeWeight(3);
}

function draw() {
  if (mouseX > 400) {
    //yellow
    fill(255, 255, 0);
  } else if (mouseX > 300) {
    //violet
    fill(101, 22, 232);
  } else if (mouseX > 200) {
    //green
    fill(101, 250, 182);
  } else if (mouseX > 100) {
    //pink
    fill(255, 142, 182);
  } else {
    //orange
    fill(255, 142, 0);
  }
  	  triangle(50, 400, 150, 400, 100, 480);
  quad(30, 100, 300, 450, 350, 150, 200, 50);
  }