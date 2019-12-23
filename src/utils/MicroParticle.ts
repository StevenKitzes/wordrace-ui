export interface Options {
  x: number;
  y: number;
  context: CanvasRenderingContext2D;
}

class MicroParticle {
  context: CanvasRenderingContext2D;
  random: number = Math.random();
  random1: number = Math.random();
  random2: number = Math.random();
  progress: number = 0;
  radius: number = 1 + Math.random() * 0.5;
  xPosition: number;
  yPosition: number;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  speed: number = 2 + Math.random() * 3; // Quicker speed for small particles
  color: string = '#4EFCFE';

  constructor(options: Options) {
    this.context = options.context;
    this.xPosition = options.x;
    this.yPosition = options.y;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  move() {
    // Adjusts x position based on direction, frequently flips from left to right
    this.xPosition -= Math.sin(this.progress / (100 / (this.random1 - this.random2 * 10))) * this.speed;

    // Adjusts y position, starts from bottom of page and moves up
    this.yPosition += Math.cos(this.progress / this.height) * this.speed;

    if (this.xPosition < 0 || this.xPosition > this.width - this.radius) {
      return false
    }

    if (this.yPosition > this.height) {
      return false
    }
    this.draw()
    this.progress++
    return true
  }
}

export default MicroParticle;