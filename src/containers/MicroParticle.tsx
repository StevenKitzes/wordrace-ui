import * as React from 'react';

export interface Props {
  x: number;
  y: number;
  context: CanvasRenderingContext2D;
}

class MicroParticle extends React.Component {
  context: CanvasRenderingContext2D;
  random: number = Math.random();
  random1: number = Math.random();
  random2: number = Math.random();
  progress: number = 0;
  radius: number;
  x: number;
  y: number;
  w: number;
  h: number;
  s: number;
  color: string = '#4EFCFE';

  constructor(props: Props) {
    super(props);
    this.context = props.context;

    this.x = props.x;
    this.y = props.y;
    this.s = 2 + Math.random() * 3;
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.radius = 1 + this.random * 0.5;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  move() {
    this.x -= Math.sin(this.progress / (100 / (this.random1 - this.random2 * 10))) * this.s;
    this.y += Math.cos(this.progress / this.h) * this.s;

    if (this.x < 0 || this.x > this.w - this.radius) {
      return false
    }

    if (this.y > this.h) {
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

export default MicroParticle;