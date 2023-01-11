import CanvasUtil from './CanvasUtil.js';
import Interactable from './Interactable.js';

export default class Computer extends Interactable {
  
  public constructor(posX: number, posY: number) {
    super();
    this.width = 200;
    this.height = 200;
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/player.png');
  }

}
