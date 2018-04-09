

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);

}

function draw() {
  background(10);

  loadPixels();

  for(let x = 0; x < width; x++) {
    for(let y = 0; y < height; y++){
      let index = (x + y * width) * 500;
      pixels[index + 0] = random(100);
      pixels[index + 1] = x * 0.1;
      pixels[index + 2] = random(200);
      pixels[index + 3] = random(400);

    }
  }


  updatePixels();

}
