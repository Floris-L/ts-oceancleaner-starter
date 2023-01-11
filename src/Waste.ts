import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Waste extends ScoreItem {
  private willSludge: boolean;

  public constructor(maxY: number) {
    super();
    let wasteType = Math.random();
    if (wasteType < 0.5) {
      wasteType = 1;
      this.score = 10;
    } else if (wasteType < 0.7) {
      wasteType = 2;
      this.score = 20;
    } else {
      wasteType = 3;
      this.score = 30;
    }
    this.image = CanvasUtil.loadNewImage(`./assets/waste${wasteType}.png`);
    this.posX = -10;
    this.speed = 0.3;
    this.willSludge = Math.random() <= 0.10;
    this.posY = Math.floor(Math.random() * maxY);
  }

  /**
   * updates the waste
   * 
   * @param elapsed time elapsed from the game loop
   */
  public override update(elapsed: number): void {
    if (this.posX >= 400 && this.posX <= 450 && this.willSludge) {
      this.speed = 0.35;
      this.score = 100;
      this.image = CanvasUtil.loadNewImage('./assets/toxic.png');
    }
    this.posX += elapsed * this.speed;
  }
}
