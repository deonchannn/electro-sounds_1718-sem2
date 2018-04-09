
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(178,34,34);

}

function draw(){

  stroke(255);
  strokeWeight(1);
  line1();
  line2();
  line3();
  line4();
}

function line1(){

  randomSeed(50);
  for (var i = 0; i < 12; i++){
    var x = random(10,windowWidth);
    var y = random(10, windowHeight/2);
    line(windowWidth / 2, 0, x, y * 2);

  }

}

function line2(){

  randomSeed(80);
  for (var i = 0; i < 12; i++){
    var x = random(10,windowWidth);
    var y = random(10, windowHeight/3);
    line(windowWidth / 2, windowHeight, x, y);

  }

}

function line3(){

  randomSeed(70);
  for (var i = 0; i < 12; i++){
    var x = random(10,windowWidth/2);
    var y = random(10, windowHeight);
    line(0, windowHeight / 2, x , y );

  }

}

function line4(){

  randomSeed(500);
  for (var i = 0; i < 12; i++){
    var x = random(700,windowWidth/2);
    var y = random(10, windowHeight);
    line(windowWidth, windowHeight / 2, x, y);

  }

}
