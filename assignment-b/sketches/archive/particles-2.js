
let particles = [];
let rets = [];
let lines = [];
let ySpacing = 20;
let xSpacing = 200;
let xLength = xSpacing - 50;
let xOffset = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < 500; i++){
    particles[i] = new Particle();
   }

   for (let j = 0; j < 100; j++) {
     rets[j] = new ret();
   }

   // for (let k = 0; k < 50; k++) {
   //   lines[k] = new Lineshape();
   // }

}

// var n = windowHeight/ySpacing;
// for(var y = 0; y < n; y++) {
//
//   line(0,(y * ySpacing),windowWidth - xOffset,(y * ySpacing));
// }
// }

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
  let n = windowHeight/ySpacing;
  for (let k = 0; k < n; k++) {
    line(0,(k * ySpacing),windowWidth - xOffset,(k * ySpacing));
    //lines[k].update();
    //lines[k].show();
    // lines[k].edge();
    // lines[k].topedge();

  }


}

// class Lineshape {
//
//   constructor() {
//     this.x1 = 0;
//     this.y1 = 0;
//     this.x2 = width;
//     this.y2 = height;
//     this.vx = random(-2, -1);
//     this.vy = random(-5, -1);
//     this.alpha = 255;
//   }
//
//   update() {
//
//     this.x1 += this.vx;
//     this.x2 += this.vx;
//     this.x2 += mouseX/2;
//
//     if (mouseX == 0) {
//       this.x2 -= 0.5;
//       this.x1 -= 0.5;
//     }
//
//     this.alpha -= 5;
//   }
//
//   show() {
//     stroke(255);
//     for (let k = 0; k < n; k++) {
//     line(0,(k * ySpacing),windowWidth - xOffset,(k * ySpacing));
//   }
//   }
//
//   edge() {
//     if(this.x2 > width){
//       this.x2 = 0;
//     }
//     if(this.x2 < 0){
//       this.x2 = width;
//     }
//
//     if(this.y2 > width){
//       this.y2 = 0;
//     }
//     if(this.y2 < 0){
//       this.y2 = width;
//     }
//   }
//   //
//   // topedge() {
//   //
//   //   if(this.y1 && this.y2 > height){
//   //     this.y1 = height;
//   //     this.y2 = height;
//   //   }
//   // }
//   //
//
//
// }


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
    this.x1 -= mouseX/4;
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
    this.x += mouseX/2;
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
