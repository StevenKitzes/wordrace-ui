import * as React from 'react';
import MicroParticle from './MicroParticle';

export interface Props {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  addMicroParticle: Function;
}

class Particle extends React.Component {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  random: number = Math.random();
  random1: number = Math.random();
  random2: number = Math.random();
  ID: NodeJS.Timeout;
  progress: number = 0;
  addMicroParticle: Function;
  life: number = 1000 * (Math.random() * 3000);
  direction: number;
  radius: number;
  x: number;
  y: number;
  w: number;
  h: number;
  s: number;
  color: string = '#ff417d';

  constructor(props: Props) {
    super(props);
    this.context = props.context;
    this.canvas = props.canvas;
    this.addMicroParticle = props.addMicroParticle;
    this.direction = this.random > .5 ? -1 : 1;
    this.radius = 1 + (3 * this.random);
    this.initialize();
  }

  initialize() {
    this.x = (window.innerWidth / 2) + (Math.random() * 20 - Math.random() * 20);
    this.y = window.innerHeight;
    this.s = 2 + Math.random();
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.ID = setInterval(() => {
      if (document.hidden) return;
      this.addMicroParticle(new MicroParticle({
        context: this.context,
        x: this.x,
        y: this.y
      }));
    }, this.random * 250);
    setTimeout(() => clearInterval(this.ID), this.life);
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  move() {
    this.x -= (this.direction) * Math.sin(this.progress / ((this.random1 * 430))) * this.s;
    this.y -= Math.cos(this.progress / this.h) * this.s;

    if (this.x < 0 || this.x > this.w - this.radius) {
      clearInterval(this.ID)
      return false
    }

    if (this.y < 0) {
      clearInterval(this.ID)
      return false
    }

    this.draw()
    this.progress++
    return true
  }

  render(): null {
    return null
  }
}

export default Particle;