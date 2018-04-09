// rotation
var objRotateX = 0;
var objRotateY = 0;
var objRotateZ = 0;

function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(230);
  doAnimate();
  objRotate();
  drawModel();

}

function drawModel() {
  var spikeCount = 1000;
  var spikeMaxLen = height/10;
  var groupRadius = (height/2) - (height/10);




  noStroke();

  for (var s=0; s < spikeCount; s++) {

    var noiseCoord = s;
    var rnd = lerp(-1,1,noise(noiseCoord));


    // translate
    rotateY(PI*rnd);
    rotateZ(PI*rnd);
    translate(groupRadius,0,0);

    fill(255,0,0);
    plane(rnd * spikeMaxLen,1);

    //reset translation
    translate(-groupRadius,0,0);
    rotateY(-(PI*rnd));
    rotateZ(-(PI*rnd));
  }

}

function doAnimate() {
  // increment animation variables
  objRotateX -= 0.3;
  objRotateY -= 0.3;
  objRotateZ -= 0.2;
}

function objRotate() {
  rotateX(radians(objRotateX));
  rotateY(radians(objRotateY));
  rotateZ(radians(objRotateZ));
}
