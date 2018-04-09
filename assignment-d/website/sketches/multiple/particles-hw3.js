let Star = [];

let num = 800;
let speed;

function setup() {

  createCanvas(windowWidth,windowHeight);

  for(let i = 0; i < num; i++) {
    Star[i] = new star(p);
  }
}

function draw() {
   speed = map(mouseX, 0, width, 0, 50);
  // speed = 20;
  background(0);
  translate(width/2, height/2);
  for(let i = 0; i < num; i++) {
    Star[i].update();
    Star[i].show();
  }

}


class star {

  constructor(TheP){
    this.x = TheP.random(-TheP.width, TheP.width);
    this.y = TheP.random(-TheP.height, TheP.height);
    this.z = TheP.random(TheP.width);
    this.pz = this.z;
    this.p = theP;

  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = this.p.random(-width, width);
      this.y = this.p.random(-height, height);
      this.pz = this.z;

    }

  }

  show() {
    fill(255);
    noStroke();

    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, width);
    this.r = map(this.z, 0 , width, 16, 0);

    ellipse(this.sx, this.sy, this.r, this.r);

    this.px = map(this.x / this.pz, 0, 1, 0, width);
    this.py = map(this.y / this.pz, 0, 1, 0, width);

    this.pz = this.z;
    stroke(255);
    line(this.px, this. py, this.sx, this.sy);



  }

}
