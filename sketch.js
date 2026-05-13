// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

let jengaImg;

function preload() {
  jengaImg = loadImage("assets/images/jenga.jpg");
}

function setup() {
  createCanvas(800, 450);

  // background
  background(240, 220, 190);

  // image
  image(jengaImg, 250, 100, 300, 200);

  // text
  fill(80, 40, 20);
  textSize(40);
  textAlign(CENTER);
  text("JENGA", width / 2, 60);

  // shape
  fill(190, 130, 70);
  rect(330, 340, 200, 30);
  rect(290, 390, 200, 30);
}

function draw() {}

function mousePressed() {
  // Draw a random-coloured circle wherever the user clicks
  fill(random(255), random(255), random(255));
  noStroke();
  circle(mouseX, mouseY, 40);
}
