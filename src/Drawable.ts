import CanvasUtil from './CanvasUtil.js';

export default abstract class Drawable {
  public image: HTMLImageElement;

  public posX: number;

  public posY: number;

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  /** 
   * Renders the element to the screen using CanvasUtil
   * 
   * @param canvas the current canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
