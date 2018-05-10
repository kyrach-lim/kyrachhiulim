// Where is the circle
var x, y;
// for red, green, and blue color values
var r, g, b;

function setup() {
  createCanvas (600,400);  
	background (255,182,193);
  // Starts in the middle
  x = width / 2;
  y = height;
}

	function draw() {
  // Draw a circle

  fill(random (250), random(0,225), random(0, 255));
  stroke(255);
  ellipse(x, y, 24, 24);
		
  // Jiggling randomly on the horizontal axis
  x = x + random(0,0);
  // Moving up at a constant speed
  y = y - 5;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}
