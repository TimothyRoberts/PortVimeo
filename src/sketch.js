export default function sketch (p) {
let bg;

  p.setup = function () {
		console.log("I'm working........")
    p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
		p.canvas.parent('canvasContainer');
	  p.background(253, 190, 0);
		p.bg = "yellow";
		p.buttonPressed = false;
		console.log(p.buttonPressed);
  };


  p.draw = function () {
    if(p.bg == "yellow") {
	    p.background(253, 190, 0);
	  } else if (p.bg == "black") {
		  p.background(0);
		}
  };


	p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.background != "black"){
      console.log("BLACK BACKGROUND!");
			p.bg = "black";
			console.log(p.bg);
    }
  };


	p.windowResized = function () {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		p.background(240, 240, 240);
	}
};

//
// function myFunction(p) {
//   // p.buttonPressed = true;
//   p.console.log("pressed!!!");
//   //   p.console.log("pressed!!!");
//   //     p.console.log("pressed!!!");
//   // p.background(0);
// }
