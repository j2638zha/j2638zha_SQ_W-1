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
  rect(100, 340, 200, 30);
}

function draw() {}
// Nothing here for now — everything is drawn once in setup()

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
