export type CanvasProps = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

/**
 * Creates a rectangle over the canvas with
 * a slight transparency (alpha).
 *
 * @param canvas HTMLCanvasElement - the canvas element
 * @param context CanvasRenderingContext2D - 2D rendering context for the canvas
 */
export function clearCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  const alpha = 0.16;
  const gradient = context.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    0,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width * 2
  );

  gradient.addColorStop(0, 'rgba(79,21,127,1)');
  gradient.addColorStop(1, 'rgba(26,14,4,0)');

  context.globalAlpha = alpha;
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
}