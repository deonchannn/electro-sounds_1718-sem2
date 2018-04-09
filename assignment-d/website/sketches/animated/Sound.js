let fft;
let mic;
let Ball = [];
let Line = [];
let num = 1;
let song;




function preload() {
    song = loadSound("Noise.mp3");
}

function setup() {
  createCanvas(displayWidth, 480);
  button = createButton('toggle');
  button.mousePressed(togglePlaying);

  // mic = new p5.AudioIn();
  // mic.start();
  // fft = new p5.FFT();
  // fft.setInput(mic);

  fft = new p5.FFT();

  for(let i = 0; i < num; i++) {
    Ball[i] = new ball();
  }
  let num2 = 100;
  for(let y = 0; y < num2; y++) {
    Line[y] = new drawline();
  }

}


function togglePlaying() {
  if( !song.isPlaying()) {
    song.play();
    button.html("Pause");
  } else {
    song.pause();
    button.html("Play");
  }

}

function keyPressed() {
  if (keyCode == RETURN) {
    Ball.push(new ball());
  }
}

function draw() {
  background(255, 122, 126);

  // analyze amplitude values along the whole frequency domain
  let spectrum = fft.analyze();

  //grab low levels
  let lowLvls = fft.getEnergy("bass", "lowMid");
  let midLvls = fft.getEnergy("mid", "highMid");
  let highLvls = fft.getEnergy("treble");

  if(lowLvls) {
    background(255, 255, random(255));
  }
  if(midLvls) {
    background(255, random(255), random(255));
  }
  if(highLvls) {
    background(255, 122, 126);
  }

  for(let i = 0; i < Ball.length; i++) {
    Ball[i].show();
    Ball[i].topedge();
    Ball[i].edge();
    Ball[i].update();

    if(lowLvls) {
      Ball[i].lowmove();
    }
    if(midLvls) {
      Ball[i].midmove();
    }



    if(highLvls) {
      Ball[i].highmove();
    }
  }
  for(let y = 0; y < Line.length; y++) {


    if(highLvls) {
      Line[y].show();
      Line[y].move();
    }
  }

}


// var xoff = 0.0;
//
// function draw() {
//   background(204);
//   xoff = xoff + 0.01;
//   var n = noise(xoff) * width;
//   line(n, 0, n, height);
// }

class drawline {
  constructor() {
    this.ySpacing = 200;
    this.xSpacing = 200;
    this.xLength = this.xSpacing - 50;
    this.xOffset = 0;
    this.y = 0;
    this.x1 = 0;
    this.z = random(height);
    this.y = noise(this.xOffset * width);
    this.x2 = windowWidth - this.xOffset;
    this.r = map(this.z, 0, height, 10, 0);
  }

  show() {
    stroke(0);
    line(this.y,this.x1,this.y,height);
  }

  move() {
    this.y = this.y + random(-10,10);

  }
}

class ball {

  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.vx = random(-1, 10);
    this.vy = random(-1,1);
    this.f = noFill();
    this.s = stroke(255);
    this.z = random(width);
    this.history = [];
    this.num = random(-50,100);

  }

  update() {
    this.s = stroke(255);
    this.f = noFill();
    strokeWeight(1);

    for(let i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2,2);
      this.history[i].y += random(-2,2);
    }


    this.v = createVector(this.x, this.y, this.z);
    this.history.push(this.v);

    if(this.history.length > this.num) {
      this.history.splice(0,1);
    }





  }


  show() {
    this.s;
    this.f;
    this.r = map(this.z, 0 , width, 10, 0);
    ellipse(this.x, this.y, this.r);

    noFill();
    beginShape();
    for(let i = 0; i < this.history.length; i++) {
      this.pos = this.history[i];
      // ellipse(this.pos.x, this.pos.y, this.r);
      vertex(this.pos.x, this.pos.y);
    }
    endShape();

  }


  lowmove() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }

  midmove() {
    this.x += this.vx;
    this.y += this.vy;


    // this.f = noFill();
      this.f = fill(random(255), random(255), random(255));


  }


  highmove() {
      strokeWeight(2);
      this.s = stroke(255);
      // this.s = stroke(random(255), random(255), random(255));



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
      this.y = 0;
    }

    if(this.y < 0) {
      this.y = height;
    }
  }

}









  // fill(255);
  // ellipse(width/2, highLvls, lowLvls, midLvls);

  // for(let i = 0; i < 5; i++) {
  //   line((i * 10) * lowLvls, (i * width) * midLvls, highmidLvls, height);
  // }

  // let n = 5;
  // //windowHeight/ySpacing;
  // for (let k = 0; k < n; k++) {
  //   line(0,(k * ySpacing),windowWidth - xOffset,(k * ySpacing));
  // }
