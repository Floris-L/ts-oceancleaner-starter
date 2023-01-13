import Bird from './Bird.js';
import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import KeyListener from './KeyListener.js';
import Pipe from './Pipe.js';
import Scene from './Scene.js';

export default class FlappyScene extends Scene {
  private bg: HTMLImageElement;

  private bird: Bird;

  private pipes: Pipe[];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.bird = new Bird();
    this.bg = CanvasUtil.loadNewImage('./assets/flappybg.png');
    this.pipes = [];
  }

  /**
   *
   */
  public processInput(keyListener: KeyListener): void {
    
  }

  public update(elapsed: number): Scene {
    // generate pipes
    const x = 600;
    const pipeWidth = 50;
    const pipeGap = 120;
    const topHeight = Math.floor(Math.random() * (250 - 100) + 100);
    const bottomHeight = 300 - topHeight - pipeGap;

    // Create the top pipe
    const topPipe = new Pipe(x, 0, pipeWidth, topHeight);
    this.pipes.push(topPipe);

    // Create the bottom pipe
    const bottomPipe = new Pipe(x, topHeight + pipeGap, pipeWidth, bottomHeight);
    this.pipes.push(bottomPipe);

    this.bird.update();

    for (let i = 0; i < this.pipes.length; i++) {
      this.pipes[i].update();
    }

    this.bird.update();

    // Check for collision with pipes
    // for (let i = 0; i < this.pipes.length; i++) {
    //   const pipe = this.pipes[i];
    //   if (this.bird.getX() + birdWidth > pipe.getX() && this.bird.getX() < pipe.getX() + pipeWidth)
    //   {
    //     if (this.bird.getY() < pipe.getY() + pipeHeight
    //     || this.bird.getY() + birdHeight > pipe.getY() + pipeHeight + pipeGap) {
    //       this.gameOver();
    //       return new FlappyScene(this.maxX, this.maxY);
    //     }
    //   }
    // }

    // // Check for collision with floor and ceiling
    // if (this.bird.getY() + birdHeight > floorY || this.bird.getY() < 0) {
    //   this.gameOver();
    //   return new FlappyScene(this.maxX, this.maxY);
    // }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(
      canvas,
      this.bg,
      (canvas.width / 2) - (this.bg.width / 2),
      (canvas.height / 2) - (this.bg.height / 2),
    );
    this.pipes.forEach((pipe) => {
      pipe.setX(pipe.getX() - 2);
      // render the pipe on the screen
      CanvasUtil.drawRectangle(
        canvas,
        pipe.getX(),
        pipe.getY(),
        pipe.getWidth(),
        pipe.getHeight(),
      );
    });
  }


}
