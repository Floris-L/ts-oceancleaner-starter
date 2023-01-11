import CanvasUtil from './CanvasUtil.js';

export default class Prompt {
  private posX: number;

  private posY: number;

  private string: string;

  public constructor(posX: number, posY: number) {
    this.posX = posX;
    this.posY = posY;
    this.string = 'E To interact';
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.writeTextToCanvas(canvas, this.string, this.posX, this.posY);
  }
}
