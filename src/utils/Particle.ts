import MicroParticle from './MicroParticle';

export type Options = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  addMicroParticle: Function;
}

class Particle {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  randomValue: number = Math.random();
  intervalID: number;
  progress: number = 0;
  addMicroParticle: Function;
  microParticleDuration: number = 1000 * (Math.random() * 3000);
  direction: number = Math.random() > .5 ? -1 : 1; // Left: 1, Right: -1
  radius: number = 1 + (3 * Math.random());
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  yPosition: number = window.innerHeight;
  xPosition: number = (
    (window.innerWidth / 2) + (Math.random() * 20 - Math.random() * 20)
  );
  speed: number = 2 + Math.random();
  color: string = '#ff417d';

  constructor(options: Options) {
    this.context = options.context;
    this.canvas = options.canvas;
    this.addMicroParticle = options.addMicroParticle;
    this.startMicroParticleInterval();
  }

  startMicroParticleInterval() {
    this.intervalID = window.setInterval(() => {
      if (document.hidden) return;
      this.addMicroParticle(new MicroParticle({
        context: this.context,
        x: this.xPosition,
        y: this.yPosition
      }));
    }, this.randomValue * 250);
    setTimeout(() => clearInterval(this.intervalID), this.microParticleDuration);
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  move() {
    // Adjusts x position based on direction, will sometimes flip from left to right
    this.xPosition -= (this.direction) * Math.sin(this.progress / ((this.randomValue * 430))) * this.speed;

    // Adjusts y position, starts from bottom of page and moves up
    this.yPosition -= Math.cos(this.progress / this.height) * this.speed;

    if (this.xPosition < 0 || this.xPosition > this.width - this.radius) {
      clearInterval(this.intervalID)
      return false
    }

    if (this.yPosition < 0) {
      clearInterval(this.intervalID)
      return false
    }

    this.draw();
    this.progress++
    return true
  }
}

export default Particle;