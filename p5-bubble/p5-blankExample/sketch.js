let bubbles = [];

let eye;
let images = [];

function preload() {
  eye = loadImage('images/eye1.png');
  for (let i = 0; i < 3; i++) {
    images[i] = loadImage(`images/eye${i}.png`);
  }
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
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
  background(0);
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
      this.eye = eye; //random(eyes);
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
