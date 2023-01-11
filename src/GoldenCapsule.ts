import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class GoldenCapsule extends ScoreItem {
  public constructor(maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/capsule.png');
    this.posX = -10;
    this.speed = 0.3;
    this.posY = Math.floor(Math.random() * maxY);
    this.score = 0;
  }

  /**
   *updates the golden capsule
   * 
   * @param elapsed elapsed time from the game loop
   */
  public override update(elapsed: number): void {
    this.posX += elapsed * this.speed;
    this.posY -= elapsed * (this.speed / 10);
  }
}
