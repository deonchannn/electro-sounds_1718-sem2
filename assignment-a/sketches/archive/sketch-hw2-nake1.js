var lines = [];
var colors = [ "darkred", "black"];

function setup() {
	createCanvas(windowWidth,windowHeight);
  for (var i=0; i<10; i++) {
    lines.push(new createLines()); // populate the array and create initial random values
  }
}

function draw() {
	background(242, 237, 233);
	strokeCap(SQUARE);
	for (var i=0; i<10; i++) {
    lines[i].display();     // display the lines

  }
}


function createLines() {
	this.x = random(100,width-250);
	this.y = random(100,height-250);
  this.length = random(100,150);
	this.depth = random(50,200);
  this.gap = random(16,20);
  this.dist = this.depth / this.gap;

  this.index = floor(random(colors.length));
	this.strokes = colors[this.index];
  this.strokesweight = random(0.5,3.2);

  this.display = function() {
    // the depth is divided by the gap to set the distance between the lines when incrementing
    // this.depth/this.gap
    for (var i = 0; i < this.depth; i ++) {
    	stroke(this.strokes);
  		strokeWeight(this.strokesweight);

      // x1: random generated x start value
      // y1 & y2: random generated y start value plus the iteration number to move the line down
      // x2: same as x1 but with the added length
      line(this.x,(i * this.dist) + this.y,this.length+this.x, (i * this.dist) +this.y);
		}
  }
}
