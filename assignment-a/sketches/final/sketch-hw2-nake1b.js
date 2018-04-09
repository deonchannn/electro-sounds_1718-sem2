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

if (mouseIsPressed) {
	for (var i = 0 ; i < 10; i++) {
		lines[i].display();
		lines[i].move();

	}

	} else {
		clear();
		background(242, 237, 233);

		for (var i=0; i<10; i++) {
	    lines[i].display();     // display the lines


	  }
	}
}
// object - copies of a template
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
    for (var i = 0; i < this.depth; i ++) {
    	stroke(this.strokes);
  		strokeWeight(this.strokesweight);


      line(this.x,(i * this.dist) + this.y,this.length+this.x, (i * this.dist) +this.y);
		}
  }

	this.move = function (){
		this.x = this.x + random(-1,3);
		this.y = this.y -1;

		if (this.y < 0) {
			this.y = height;
		}
		if (this.x > width) {
			this.x = 0;
		}
	}

}
