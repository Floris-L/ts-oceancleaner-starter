import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import ScoreItem from './ScoreItem.js';
import Interactable from './Interactable.js';

export default class Player extends Drawable {
  private maxY: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.maxY = maxY;
    this.posX = maxX * 0.90;
    this.posY = maxY * 0.50;
    this.image = CanvasUtil.loadNewImage('./assets/player.png');
  }

  /**
   * Moves the player up
   */
  public moveUp(): void {
    this.posY -= 5;
  }

  /**
   * Moves the player down
   */
  public moveDown(): void {
    this.posY += 5;
  }

  public moveLeft(): void {
    this.posX -= 5;
  }

  /**
   * Moves the player down
   */
  public moveRight(): void {
    this.posX += 5;
  }

  /**
   * checks if player is colliding with item
   * 
   * @param item the item that the player might be colliding with
   * @returns true if the player is colliding with the item
   */
  public collidesWithItem(item: ScoreItem): boolean {
    return (item.getPosX() < this.posX + this.image.width
    && item.getPosX() + item.getWidth() > this.posX
    && item.getPosY() + item.getHeight() > this.posY
    && item.getPosY() < this.posY + this.image.height);
  }

  public collidesWithInteractable(item: Interactable): boolean {
    return (item.getPosX() < this.posX + this.image.width
    && item.getPosX() + item.getWidth() > this.posX
    && item.getPosY() + item.getHeight() > this.posY
    && item.getPosY() < this.posY + this.image.height);
  }
}
