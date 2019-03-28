
let carX = 50;
let vroom;


function setup() {
  createCanvas(500, 500)
  vroom = new p5.Oscillator('square');
  vroom.start();
}

function draw() {

  background (0, 255, 0, 80);
  //tie sound freq to carX
  vroom.freq(carX);

  if (frameCount > 120) {
  if  ( carX >= 500 ) { carX = -50}
  else if (carX >= 300)
  {carX += 6;}
    else {
    //carX = carX + 3 speed
    carX += 3; }
  }

  // draw race car body
  noStroke();
  fill(40, 225, 250);
  triangle (carX, 50, carX + 60, 80, carX, 80);

  //race car wheels
  stroke(255);
  strokeWeight(2)
  fill(0);
  ellipse(carX, 80, 20, 20);
  ellipse(carX + 50, 80, 20, 20)


}

// ideas: eyeballs moving
