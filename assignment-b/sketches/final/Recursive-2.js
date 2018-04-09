function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(0);

  stroke(255);
  noFill();
  let x = (windowWidth/2) * random(-0.05, 1.5);
  drawCircle(x,windowHeight/2,400);

}


function drawCircle(x, y, d) {
    ellipse(x, y, d);
    if (d > 2) {
      let newD = d * 0.8;
      drawCircle(x + newD * 4, y, d * 0.5);
      drawCircle(x - newD * 1, y, d * 0.5);

    }


}
