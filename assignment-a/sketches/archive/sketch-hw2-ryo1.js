var ySpacing = 40;
var xSpacing = 200;
var xLength = xSpacing - 50;
var xOffset = 0;

function setup (){
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(5);
}

function draw(){
  background(0);

  push();
  translate(xOffset,40);
  greyline();
  whiteLines();
  pop();

}

function greyline(){
  stroke(126);
  var n = windowHeight/ySpacing;
  for(var y = 0; y < n; y++) {

    line(0,(y * ySpacing),windowWidth - xOffset,(y * ySpacing));
  }
}

function whiteLines() {
  stroke(255);
  var nx = (windowWidth - xOffset)/xSpacing;
  var ny = windowHeight/ySpacing;
  for(var x = 0; x < nx; x++) {
    for(var y = 0; y < ny; y++) {
      if(y%6 != 0) {
        line( x * xSpacing, y * ySpacing, x * xSpacing + xLength, y * ySpacing);
      }
    }
  }
}



// function whiteline1(){
//
//   for(var y = 0; y < 5;y++) {
//     stroke(255,255,255);
//     strokeCap(SQUARE);
//     line(30,y,1200,y);
//   }
//   // nested loops
//   for(var i = 0; i < xpos.length; i++) {
//     for(var y = 70; y < 160; y = y + 20){
//     stroke(126);
//     line(xpos[i],y,xpos[i] + 20,y);
//     }
//   }
// }
//
//
// function whiteline2(){
//
//   for(var y = 210; y < 300; y = y + 20) {
//     stroke(255,255,255);
//      line(30,y,1200,y);
//    }
//    // nested loops
//    for(var i = 0; i < xpos.length; i++) {
//      for(var y = 210; y < 300; y = y + 20){
//      stroke(126);
//      line(xpos[i],y,xpos[i] + 20,y);
//      }
//    }
//
// }
//
// function whiteline3(){
//
//   for(var y = 350; y < 440; y = y + 20) {
//     stroke(255,255,255);
//      line(30,y,1200,y);
//    }
//    // nested loops
//    for(var i = 0; i < xpos.length; i++) {
//      for(var y = 350; y < 440; y = y + 20){
//      stroke(126);
//      line(xpos[i],y,xpos[i] + 20,y);
//      }
//    }
//
// }
//
// function whiteline4(){
//
//   for(var y = 490; y < 580; y = y + 20) {
//     stroke(255,255,255);
//      line(30,y,1200,y);
//    }
//    // nested loops
//    for(var i = 0; i < xpos.length; i++) {
//      for(var y = 490; y < 580; y = y + 20){
//      stroke(126);
//      line(xpos[i],y,xpos[i] + 20,y);
//      }
//    }
//
// }
