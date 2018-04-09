
var angle;
var axiom = "F";
var sentence = axiom;
var len = 50;

var rules = [];
rules[0] = {
  a:"F",
  b:"FFF-[-F+F-F-F]+[+F+F+F+F]"
}

function generate() {
  len *= 0.4;
  let nextsentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
    let found = false;
      for (let j = 0; j < rules.length; j++){
        if (current == rules[j].a) {
          nextsentence += rules[j].b;
          found = true;
          break;
        }
      }
      if (!found) {
        nextsentence += current;
      }
  }

  sentence = nextsentence;
  createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  translate(width / 2, height)
  stroke(255);
  for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);

        if (current == "F") {
          line(0, 0, 0, -len);
          translate(0, -len);
        } else if (current == "+") {
          rotate(angle);
        } else if (current == "-") {
          rotate(-angle)
        } else if (current == "[") {
          push();
        } else if (current == "]") {
          pop();
        }
  }


}

function setup() {
  createCanvas(400,400);
  angle = radians(5);
  background(51);
  createP(axiom);
  turtle();
  let button = createButton("generate");
  button.mousePressed(generate);


}

function draw() {


}
