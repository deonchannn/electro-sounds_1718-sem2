let spike = [];
let part = [];
let side = [];
let spikeCount = 500;
let sideCount = 100;

let song;
let mic;
let fft;



function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);


   pixelDensity(1);

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);


   for (let s = 0; s < spikeCount; s++) {
     spike[s] = new drawspike();
   }

   for (let i = 0; i < spikeCount; i++) {
     part[i] = new drawpart();
   }

   for (let j = 0; j < sideCount; j++) {
     side[j] = new drawside();
   }


}

function draw() {
  background(10);
  // analyze amplitude values along the whole frequency domain
  let spectrum = fft.analyze();

  //grab frequency levels
  let lowLvls = fft.getEnergy("bass", "lowMid");
  let midLvls = fft.getEnergy("mid", "highMid");
  let highLvls = fft.getEnergy("treble");



  for (var s = 0; s < spikeCount; s++) {

    spike[s].objRotate();
    spike[s].move();
    spike[s].show(s);
    spike[s].topedge();
    spike[s].edge();
    spike[s].update();

    if(highLvls) {
      spike[s].highmove();
    }
  }


    for (var j = 0; j < sideCount; j++) {



      side[j].objRotate();
      side[j].move();
      side[j].show(j);
      side[j].topedge();
      side[j].edge();
      side[j].update();
        if(midLvls) {
      side[j].midmove();
      }
    }


  for (var i = 0; i < spikeCount; i++) {

    part[i].objRotate();
    part[i].move();
    part[i].show(s);
    part[i].topedge();
    part[i].edge();
    part[i].update();
    if(lowLvls) {
    part[i].lowmove();

    }
  }






}



class drawspike {


  constructor() {
    this.objRotateX = 0;
    this.objRotateY = 0;
    this.objRotateZ = 0;
    let speedAmp = 0.02;
    this.speedX = noise(-1.0,1.0) * speedAmp;
    this.speedY = noise(-1.0,1.0) * speedAmp;
    this.speedZ = noise(-1.0,1.0) * speedAmp;
    this.spikeMaxLen = height/40;
    this.groupRadius = (height/2) - (height/2);
    this.f = fill(189);
    this.s = noStroke();
    this.rx = this.objRotateX - random(-5, 5);
    this.angle = 0;

  }

  show(s){
    this.noiseCoord = s;
    this.rnd = lerp(-1,1,noise(this.noiseCoord));
    noStroke();
    // translate
    rotateY(PI*this.rnd);
    rotateZ(PI*this.rnd);
    translate(this.groupRadius,0,0);

    this.f;
    this.s;
    plane(this.rnd * this.spikeMaxLen,10);
    // sphere(1, 10, 50);

    //reset translation
    translate(-this.groupRadius,0,0);
    rotateY(-(PI*this.rnd));
    rotateZ(-(PI*this.rnd));
  }

  move() {
    this.objRotateX -= this.speedX;
    this.objRotateY -= this.speedY;
    this.objRotateZ -= this.speedZ;
    }

  objRotate() {
    rotateX(radians(this.objRotateX));
    rotateY(radians(this.objRotateY));
    rotateZ(radians(this.objRotateZ));
  }

  update(){
    this.f = fill(189);
    this.groupRadius = (height/2) - (height/20);
  }

  lowmove() {
    this.f = fill(random(255))
    this.groupRadius = this.groupRadius + noise(-5,5);

  }


  midmove() {
    this.f = fill(random(255),random(255));
    this.groupRadius = this.groupRadius + noise(-50,50);


  }

  highmove() {
    this.f = fill(random(255), random(255), random(255));
    rotateX(radians(this.rx/PI));
    this.groupRadius = this.groupRadius / PI * 4;


  }

  edge() {
    if(this.groupRadius > width){
      this.groupRadius = 0;
    }
    if(this.groupRadius < 0){
      this.groupRadius = width;
    }


  }

  topedge() {

    if(this.groupRadius > height){
      this.groupRadius = height;
    }
  }


}

class drawpart {


  constructor() {
    this.objRotateX = 0;
    this.objRotateY = 0;
    this.objRotateZ = 0;
    let speedAmp = 0.02;
    this.speedX = noise(-1.0,1.0) * speedAmp;
    this.speedY = noise(-1.0,1.0) * speedAmp;
    this.speedZ = noise(-1.0,1.0) * speedAmp;
    this.spikeMaxLen = height/20;
    this.groupRadius = (height) - (height/20);
    this.f = fill(230);
    this.s = noStroke();
    this.rx = this.objRotateX - random(-5, 5);
    this.angle = 0;

  }

  show(s){
    this.noiseCoord = s;
    this.rnd = lerp(-1,1,noise(this.noiseCoord));
    noStroke();
    // translate
    rotateY(PI*this.rnd);
    rotateZ(PI*this.rnd);
    translate(this.groupRadius,0,0);

    this.f;
    this.s;
    sphere(1, 10, 50);

    //reset translation
    translate(-this.groupRadius,0,0);
    rotateY(-(PI*this.rnd));
    rotateZ(-(PI*this.rnd));
  }

  move() {
    this.objRotateX -= this.speedX;
    this.objRotateY -= this.speedY;
    this.objRotateZ -= this.speedZ;

    }

  objRotate() {
    rotateX(radians(this.objRotateX));
    rotateY(radians(this.objRotateY));
    rotateZ(radians(this.objRotateZ));
  }

  update(){
    this.f = fill(230);
    this.groupRadius = (height/2) - (height/20);


  }

  lowmove() {
    this.f = fill(random(255))
    this.groupRadius = this.groupRadius * noise(50,100);

  }



  edge() {
    if(this.groupRadius > width){
      this.groupRadius = 0;
    }
    if(this.groupRadius < 0){
      this.groupRadius = width;
    }


  }

  topedge() {

    if(this.groupRadius > height){
      this.groupRadius = height;
    }
  }


}

class drawside {


  constructor() {
    this.objRotateX = 0;
    this.objRotateY = 0;
    this.objRotateZ = 0;
    let speedAmp = 0.02;
    this.speedX = noise(-1.0,1.0) * speedAmp;
    this.speedY = noise(-1.0,1.0) * speedAmp;
    this.speedZ = noise(-1.0,1.0) * speedAmp;
    this.spikeMaxLen = height/20;
    this.groupRadius = width - 50;
    this.f = fill(230);
    this.s = noStroke();
    this.rx = this.objRotateX - random(-5, 5);
    this.angle = 0;

  }

  show(j){
    this.noiseCoord = j;
    this.rnd = lerp(-1,1,noise(this.noiseCoord));
    noStroke();
    // translate
    rotateY(PI*this.rnd);
    rotateZ(PI*this.rnd);
    translate(this.groupRadius,0,0);

    this.f;
    this.s;
    sphere(5);

    //reset translation
    translate(-this.groupRadius,0,0);
    rotateY(-(PI*this.rnd));
    rotateZ(-(PI*this.rnd));
  }

  move() {
    this.objRotateX -= this.speedX;
    this.objRotateY -= this.speedY;
    this.objRotateZ -= this.speedZ;

    }

  objRotate() {
    rotateX(radians(this.objRotateX));
    rotateY(radians(this.objRotateY));
    rotateZ(radians(this.objRotateZ));
  }

  update(){
    this.f = fill(230);
    this.groupRadius = (height/2) - (height/20);
  }


  midmove() {
    this.f = fill(noise(255),random(255),0);
    this.groupRadius = this.groupRadius * noise(-20,50);


  }



  edge() {
    if(this.groupRadius > 500){
      this.groupRadius = 0;
    }
    if(this.groupRadius < 0){
      this.groupRadius = width;
    }


  }

  topedge() {

    if(this.groupRadius > height){
      this.groupRadius = height;
    }
  }
}
