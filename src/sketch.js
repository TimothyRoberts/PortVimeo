export default function sketch (p) {

p.particles = [];

  p.setup = function () {
    p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
		p.canvas.parent('canvasContainer');
	  p.background(253, 190, 0);
    for(p.i = 0; p.i < 50; p.i++) {
      p.particles.push(new Particle(p.random(p.windowWidth), p.random(p.windowHeight)));
    }
    // console.log(p.particles[0]);

  };


	p.draw = function () {
    p.background(253, 190, 0, 10);
    p.fill(0);
    // console.log(p.mouseX);
    for(p.i = 0; p.i < p.particles.length; p.i++) {
      // console.log(p.particles.[p.i]);
      p.particles[p.i].show();
      p.particles[p.i].update(p.mouseX, p.mouseY);

    }
    // p.noLoop();
  };

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.velocity = p.createVector(0, 0);
      this.acceleration = p.createVector();

    }

    update(mx, my) {
      this.distance = p.dist(mx, my, this.x, this.y);
      if (this.distance < 200) {
        p.beginShape(p.TRIANGLE_STRIP);
        p.vertex(this.x, this.y);
        p.vertex(mx, my);
        // p.vertex(this.x, this.y);
        p.endShape();
      }
    }

    show() {
      p.fill(0);
      p.ellipse(this.x, this.y, 3, 3);
    }
  }


	p.windowResized = function () {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		// p.background(240, 240, 240);
	}
};
