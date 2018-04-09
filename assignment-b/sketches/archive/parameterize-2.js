// rotation
var objRotateX = 0;
var objRotateY = 0;
var objRotateZ = 0;

function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  doAnimate();
  objRotate();
  drawModel();

}

function drawModel() {
  var groupRadius = (height/1) - (height/15);
  var sphereCount = 50;
  var sphereMaxR = 30;

  // big sphere
  //noFill(); // hmmm, seems like noFill has no effect on 3d yet
  //stroke(255); // hmmm, seems like stroke has no effect on 3d yet
  //basicMaterial(255,255,255);
  //sphere(groupRadius, 20);

  // smaller spheres
  //basicMaterial(32);

  for (var s=0; s < sphereCount; s++) {

    var noiseCoord = s;
    var rnd = lerp(-1,1,noise(noiseCoord));


    // translate
    rotateY(PI*rnd);
    rotateZ(PI*rnd);
    translate(groupRadius,0,0);

    sphere(rnd * sphereMaxR, 40);

    //reset translation
    translate(-groupRadius,0,0);
    rotateY(-(PI*rnd));
    rotateZ(-(PI*rnd));
  }

}

function doAnimate() {
  // increment animation variables
  objRotateX -= 0.1;
  objRotateY -= 0.1;
  objRotateZ -= 0.1;
}

function objRotate() {
  rotateX(radians(objRotateX));
  rotateY(radians(objRotateY));
  rotateZ(radians(objRotateZ));
}
