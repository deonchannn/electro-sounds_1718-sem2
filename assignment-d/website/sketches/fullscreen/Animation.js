// rotation
let objRotateX = 0;
let objRotateY = 0;
let objRotateZ = 0;

let song;
let fft;

function preload() {
    song = loadSound("music.wav");
}

function setup() {
   createCanvas(displayWidth, displayHeight, WEBGL);
   // button = createButton('toggle');
   // button.mousePressed(togglePlaying);
   //   fft = new p5.FFT();
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
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
function draw() {
  background(40);
  let spectrum = fft.analyze();

  //grab frequency levels
  let lowLvls = fft.getEnergy("bass", "lowMid");
  let midLvls = fft.getEnergy("mid", "highMid");
  let highLvls = fft.getEnergy("treble");


  doAnimate();
  objRotate();
  drawModel();

}

function drawModel() {
  var spikeCount = 1000;
  var spikeMaxLen = height/50;
  var groupRadius = (height/2) - (height/20);




  noStroke();

  for (var s=0; s < spikeCount; s++) {

    var noiseCoord = s;
    var rnd = lerp(-1,1,noise(noiseCoord));


    // translate
    rotateY(PI*rnd);
    rotateZ(PI*rnd);
    translate(groupRadius,0,0);

    fill(255,147,63);
    noStroke();
    // plane(rnd * spikeMaxLen,30);
    sphere(1, 10, 100);

    //reset translation
    translate(-groupRadius,0,0);
    rotateY(-(PI*rnd));
    rotateZ(-(PI*rnd));
  }

}

function doAnimate() {
  // increment animation variables
  objRotateX -= 0.2;
  objRotateY -= 0.4;
  objRotateZ -= 0.3;
}

function objRotate() {
  rotateX(radians(objRotateX));
  rotateY(radians(objRotateY));
  rotateZ(radians(objRotateZ));
}
