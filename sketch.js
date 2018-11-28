var img;
var img2;

function preload() {
img1 = loadImage("smiley_face.png");
img2 = loadImage("illusion_image2.png");
}
function setup() {
createCanvas(windowWidth, windowHeight);

}


function mousePressed() {
background(150, 10, 800);

}

function draw() {
  fill(100, 20, 400);
  ellipse(mouseX + 100, mouseY + 100, 100, 100);

}

function changeCursor() {
document.body.style.cursor = "wait";
}
