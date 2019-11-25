import * as React from 'react';
import Particle from './Particle';
import MicroParticle from './MicroParticle';

class ParticleContainer extends React.Component {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  particles: Particle[] = [];
  microparticles: MicroParticle[] = [];
  intervalDuration: number = 1000;

  componentWillMount() {
    const { canvas, context } = this.createCanvas();

    this.canvas = canvas;
    this.context = context;

    document.body.appendChild(this.canvas);

    this.update();

    setInterval(() => {
      if (document.hidden) return;
      this.particles.push(new Particle({
        canvas: this.canvas,
        context: this.context,
        addMicroParticle: this.addMicroParticle.bind(this)
      }));
      this.intervalDuration = 2000 * Math.random();
    }, this.intervalDuration);
  }

  createCanvas() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return {
      canvas,
      context
    }
  }

  clear() {
    const alpha = 0.16;
    const gradient = this.context.createRadialGradient(
      this.canvas.width / 2,
      this.canvas.height / 2,
      0,
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.width * 2
    );

    gradient.addColorStop(0, 'rgba(79,21,127,1)');
    gradient.addColorStop(1, 'rgba(26,14,4,0)');

    this.context.globalAlpha = alpha;
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    this.clear();
    this.particles = this.particles.filter(p => p.move());
    this.microparticles = this.microparticles.filter(mp => mp.move());
    requestAnimationFrame(this.update.bind(this));
  }

  addMicroParticle(microparticle: MicroParticle) {
    this.microparticles.push(microparticle);
  }

  componentWillUnmount() {
    document.body.removeChild(this.canvas);
  }

  render(): null {
    return null
  }
}

export default ParticleContainer;