let bubbles = [];

let lid;
let images = [];

let amt, startColor, newColor;

function preload() {
  lid = loadImage('images/lid.png');
  for (let i = 0; i < 3; i++) {
    images[i] = loadImage(`images/eye${i}.png`);
  }
}

function setup() {
  createCanvas(1600, 800);

  startColor = color(255,255,255);
   newColor = color(random(255),random(255),random(255));
   amt = 0;

   background(startColor);

  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 150);
    // let eye = random(eyes);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  background((lerpColor(startColor, newColor, amt)));
  amt += 0.01;
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.eye = random(images);

  }

  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.eye = lid; //random(eyes);
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.eye, this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}
