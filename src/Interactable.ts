import CanvasUtil from './CanvasUtil.js';

export default abstract class Interactable {
  public width: number;

  public height: number;

  public posX: number;

  public image: HTMLImageElement;

  public posY: number;

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
  
}
