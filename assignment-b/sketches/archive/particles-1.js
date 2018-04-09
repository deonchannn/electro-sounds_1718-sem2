
let particles = [];
let rets = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < 500; i++){
    particles[i] = new Particle();
   }

   for (let j = 0; j < 100; j++) {
     rets[j] = new ret();
   }

}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
     particles[i].update();
     particles[i].show();
     particles[i].edge();
     particles[i].topedge();
  }

  for (let j = 0; j < rets.length; j++) {
    rets[j].update();
    rets[j].show();
    rets[j].edge();
    rets[j].topedge();
  }

}

class ret {
  constructor() {
    this.x1 = 0;
    this.y1 = height/2;
    this.vx1 = random(-1, 1);
    this.vy1 = random(-5, -1);
    this.alpha1 = 255;
  }

  update() {
    this.x1 += this.vx1;
    this.y1 += this.vy1;
    // this.x1 -= mouseX;
    this.alpha1 -= 5;
  }

  show() {
    stroke(155);
    fill(255, this.alpha1);
    rect(this.x1, this.y1, 16, 16);
  }

  edge() {
    if(this.x1 > width){
      this.x1 = 0;
    }
    if(this.x1 < 0){
      this.x1 = width;
    }

    if(this.y1 > width){
      this.y1 = 0;
    }
    if(this.y1 < 0){
      this.y1 = width;
    }
  }

  topedge() {

    if(this.y1 > height){
      this.y1 = height;
    }
  }

}

class Particle {

  constructor() {
    this.x = width/2;
    this.y = 0;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    stroke(255);
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }

  edge() {
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){
      this.x = width;
    }

    if(this.y > width){
      this.y = 0;
    }
    if(this.y < 0){
      this.y = width;
    }
  }

  topedge() {

    if(this.y > height){
      this.y = height;
    }
  }


}
