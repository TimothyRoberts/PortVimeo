export default function sketch (p) {
let isYellow = true;

  p.setup = function () {
    p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
		p.canvas.parent('canvasContainer');
	  p.background(253, 190, 0);
		p.isYellow = true;
		console.log(p.isYellow);
  };


	p.draw = function () {

    p.isYellow ?  p.background(253, 190, 0) : p.background(0);


  };


	p.myCustomRedrawAccordingToNewPropsHandler = function (props) {

		console.log(p.isYellow);
		console.log(props.isYellow);

  };


	p.windowResized = function () {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		p.background(240, 240, 240);
	}
};
