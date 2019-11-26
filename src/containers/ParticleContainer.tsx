import * as React from 'react';
import Particle from '../utils/Particle';
import MicroParticle from '../utils/MicroParticle';
import { clearCanvas, CanvasProps } from '../utils/canvasUtils';

let intervalDuration: number = 1000;
const randomIntervalDuration: number = 2000 * Math.random();

let particles: Particle[] = [];
let microparticles: MicroParticle[] = [];

function ParticleContainer(): React.ReactElement {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const canvas = ref.current;
    const context = ref.current.getContext('2d');

    update({ canvas, context });

    setInterval(() => {
      if (document.hidden) return;
      particles.push(new Particle({
        canvas,
        context,
        addMicroParticle: (microparticle: MicroParticle) => {
          microparticles.push(microparticle);
        }
      }));
      intervalDuration = randomIntervalDuration;
    }, intervalDuration);
  }, []);

  return <canvas ref={ref} width={window.innerWidth} height={window.innerHeight} />;
}

function update({ canvas, context }: CanvasProps): void {
  clearCanvas(canvas, context);
  particles = particles.filter((p: Particle) => p.move());
  microparticles = microparticles.filter((mp: MicroParticle) => mp.move());
  requestAnimationFrame(update.bind(this, { canvas, context }));
}

export default ParticleContainer;