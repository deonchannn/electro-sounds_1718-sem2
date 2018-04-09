const s3 = function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(200, 600);
    canvas.parent('sketch-hw2-soi1b');


  }

  p.draw = function() {

    if (p.keyIsPressed == true ) {

      p.background(178,34,34);
      p.stroke(255);
      p.strokeWeight(1);
      p.line1();
      p.line2();
      p.line3();
      p.line4();
    } else {
      p.background(255,255,255);
    }
  }

p.line1 = function(){

  p.randomSeed(50);
  for (var i = 0; i < 12; i++){

    var x = p.random(10,p.windowWidth);
    var y = p.random(10, p.windowHeight/2);
    p.line(p.windowWidth / 2, 0, x, y * 2);

  }

}

p.line2 = function(){

  p.randomSeed(80);
  for (var i = 0; i < 12; i++){
    var x = p.random(10,p.windowWidth);
    var y = random(10, p.windowHeight/3);
    p.line(p.windowWidth / 2, p.windowHeight, x, y);

  }

}

p.line3 = function() {

  p.randomSeed(70);
  for (var i = 0; i < 12; i++){
    var x = p.random(10,p.windowWidth/2);
    var y = p.random(10, p.windowHeight);
    p.line(0, p.windowHeight / 2, x , y );

  }

}

p.line4 = function() {

  p.randomSeed(500);
  for (var i = 0; i < 12; i++){
    var x = p.random(700,p.windowWidth/2);
    var y = p.random(10, p.windowHeight);
    p.line(p.windowWidth, p.windowHeight / 2, x, y);

  }

  }
}

const p3 = new p5(s3, 'sketch-hw2-soi1b');
