// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

// Variables declared outside of setup() and draw() are
// accessible everywhere in the sketch (global scope).
let jengaImg;

function preload() {
  jengaImg = loadImage("assets/images/jenga.jpg");
}

function setup() {
  createCanvas(800, 450);

  // background
  background(245, 220, 180);

  // image
  image(jengaImg, 40, 40, 180, 180);

  // text
  fill(80, 45, 20);
  textSize(32);
  textAlign(CENTER);
  text("Jenga Tower", width / 2, 50);

  // jenga blocks
  stroke(120, 70, 30);
  strokeWeight(2);

  fill(190, 130, 65);
  rect(330, 320, 180, 35, 5);
  rect(310, 280, 180, 35, 5);
  rect(340, 240, 180, 35, 5);
  rect(320, 200, 180, 35, 5);
  rect(350, 160, 180, 35, 5);
  rect(330, 120, 180, 35, 5);

  // extra shape
  fill(255, 180, 80);
  ellipse(650, 100, 90, 90);
}

function draw() {
  // Nothing here for now — everything is drawn once in setup()
}

// ------------------------------------------------------------
// mousePressed()
// A built-in p5.js event function.
// Automatically called once every time the mouse is clicked.
// mouseX and mouseY hold the current mouse position.
// ------------------------------------------------------------
function mousePressed() {
  // Draw a random-coloured circle wherever the user clicks
  fill(random(255), random(255), random(255));
  noStroke();
  circle(mouseX, mouseY, 40);
}

// ------------------------------------------------------------
// keyPressed()
// A built-in p5.js event function.
// Automatically called once every time a key is pressed.
// The key variable holds the character that was pressed.
// ------------------------------------------------------------
function keyPressed() {
  // Press "k" to log the current mouse position to the Chrome console.
  // This is a handy debug tool — use it to find coordinates when
  // placing shapes or images on the canvas.
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}
