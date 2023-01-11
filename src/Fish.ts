import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Fish extends ScoreItem {
  public constructor(maxY: number) {
    super();
    let fishType = Math.random();
    if (fishType < 0.33) {
      fishType = 1;
      this.score = -5;
    } else if (fishType < 0.66) {
      fishType = 2;
      this.score = -10;
    } else {
      fishType = 3;
      this.score = -15;
    }
    this.image = CanvasUtil.loadNewImage(`./assets/fish${fishType}.png`);
    this.posX = -10;
    this.speed = 0.2;
    this.posY = Math.floor(Math.random() * maxY);
  }
}
