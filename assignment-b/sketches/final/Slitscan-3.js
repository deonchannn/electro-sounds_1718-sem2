let video;

let vscale = 16;
let slider;

let cols = 40;
let rows = 30;

function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  slider = createSlider(0, 255, 50);

  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
        let box = createCheckbox();
        box.parent('mirror');
    }
    var linebreak = createSpan('<br/>');
    linebreak.parent('mirror');
  }


}

function draw() {
  background(51);

  video.loadPixels();
  loadPixels();

  for(let x = 0; x < video.width; x++) {
    for(let y = 0; y < video.height; y++){
      let index = (video.width - x + 1 + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let bright = (r+g+b) / 3 ;

      let threshold = slider.value();

      if (bright > threshold) {
        fill(255);
      } else {
        fill(0);
      }


      noStroke();
      rectMode(CENTER);
      rect(x * vscale, y* vscale, vscale, vscale);



    }
  }




}
