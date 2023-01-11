import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class SceneStart extends Scene {
  private starting: boolean;

  private body = document.querySelector('body');

  private bg: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.body.style.backgroundImage = './assets/bg.png';
    console.log(this.body.style);
    this.starting = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) {
      this.starting = true;
    }
  }

  public update(elapsed: number): Scene {
    // Load scene when starting.
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
  }
}
