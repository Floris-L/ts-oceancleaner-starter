import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import Interactable from './Interactable.js';
import KeyListener from './KeyListener.js';
import Level1 from './ComputerScreen.js';
import Player from './Player.js';
import Prompt from './Prompt.js';
import Scene from './Scene.js';

export default class StartingRoom extends Scene {
  private starting: boolean;
  
  private body = document.querySelector('body');

  private Interactables: Interactable[] = [];

  private Prompt: Prompt;
  
  private player: Player;
  
  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.body.style.backgroundImage = './assets/bg.png';
    console.log(this.body.style);
    this.starting = false;
    this.player = new Player(maxX, maxY);
    this.Interactables.push(new Computer(500, 500));
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_E)) this.starting = true;
    if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.moveUp();
    if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.moveDown();
    if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.moveLeft();
    if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.moveRight();
    
  }

  public update(elapsed: number): Scene {
    // Load scene when starting.
    if (this.player.collidesWithInteractable(this.Interactables[0])) {
      this.Prompt = new Prompt(500, 500);
      if (this.starting) {
        return new Level1(this.maxX, this.maxY);
      }
    }
    return null;
  }


  public render(canvas: HTMLCanvasElement): void {
    this.player.render(canvas);
    this.Interactables[0].render(canvas);
    if (this.Prompt) this.Prompt.render(canvas);
  }
}
