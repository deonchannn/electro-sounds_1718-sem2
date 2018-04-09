let video;
let vscale = 16;

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vscale, height/vscale);

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


      let w =map(bright, 0, 255, 0, vscale);

      noStroke();
      fill(200);
      rectMode(CENTER);
      rect(x * vscale, y* vscale, w, w);


      // pixels[index + 0] = bright;
      // pixels[index + 1] = bright;
      // pixels[index + 2] = bright;
      // pixels[index + 3] = 255;

    }
  }


  // updatePixels();

}
