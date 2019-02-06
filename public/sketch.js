var canvas;
var buttonPressed = false;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('canvasContainer');
  background(253, 190, 0);

}

function draw() {
  if(buttonPressed == false) {
    background(253, 190, 0);
    fill(0);
    ellipse(200, 200, 50, 50);
  } else
  background(0);
  fill(0);
  ellipse(200, 200, 50, 50);
}




function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(240, 240, 240);
}

function myFunction() {
  buttonPressed = true;
  console.log("pressed!!!");
    console.log("pressed!!!");
      console.log("pressed!!!");
  background(0);
}
