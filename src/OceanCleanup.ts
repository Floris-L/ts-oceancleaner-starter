import { Game } from './GameLoop.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import ScoreItem from './ScoreItem.js';
import Fish from './Fish.js';
import Waste from './Waste.js';
import GoldenCapsule from './GoldenCapsule.js';
import Interactable from './Interactable.js';
import Computer from './computer.js';
import Prompt from './Prompt.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
import Level1 from './Level1.js';

export default class OceanCleanup extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private scoreItems: ScoreItem[] = [];

  private Interactables: Interactable[] = [];

  private Prompt: Prompt;

  private player: Player;

  private currentScene: Scene;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
    this.player = new Player(canvas.width, canvas.height);
    this.Interactables.push(new Computer(500, 500));
    this.currentScene = new SceneStart(this.canvas.width, this.canvas.height);
  }

  /**
   * processes the input from the keyboard
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.moveUp();
    if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.moveDown();
    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.moveLeft();
    if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.moveRight();
  }


  /**
   *updates the game state
   * 
   * @param elapsed elapsed time from the game loop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    if (this.player.collidesWithInteractable(this.Interactables[0])) {
      this.Prompt = new Prompt(500, 500);
      if (this.keyListener.isKeyDown(KeyListener.KEY_E)) {
        this.currentScene = new Level1(this.canvas.width, this.canvas.height);
      }
    } 

    // const nextScene = this.currentScene.update(elapsed);
    // if (nextScene !== null) this.currentScene = nextScene;

    return true;
  }

  /**
   *
   */
  public render(): void {
    CanvasUtil.clearCanvas(this.canvas);
    this.currentScene.render(this.canvas);
    this.player.render(this.canvas);
    this.scoreItems.forEach((item) => {
      item.render(this.canvas);
    });
    this.Interactables[0].render(this.canvas);
    if (this.Prompt) this.Prompt.render(this.canvas);
    
    
    if (!this.update(1)) {
      CanvasUtil.writeTextToCanvas(this.canvas, 'Game Over', this.canvas.width * 0.5, this.canvas.height * 0.5, undefined, undefined, 100, '#00ffff');
    }
  }
}
