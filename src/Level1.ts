import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class Level1 extends Scene {

  // private invaders: invader[];
  private bg: HTMLImageElement;

  // private invaderBullets: invaderBullet[];

  private lives: number;

  private score: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.bg = CanvasUtil.loadNewImage('./assets/red-star.jpg');
  }

  public processInput(keyListener: KeyListener): void {
  }


  public update(elapsed: number): Scene {
    // if (this.lives < 1) return new SceneState(this.maxX, this.maxY, 'You lost g');
    // if (this.playerBullet !== undefined) {
    //   this.playerBullet.update(elapsed);
    // }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.bg, 
      (canvas.width / 2) - (this.bg.width / 2),
      (canvas.height / 2) - (this.bg.height / 2));
  }
}
