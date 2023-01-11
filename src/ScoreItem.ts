import Drawable from './Drawable.js';

export default abstract class ScoreItem extends Drawable {
  public score: number;

  public speed: number;

  /**
   * updates Drawable
   * 
   * @param elapsed elapsed time from the game loop
   */
  public update(elapsed: number): void {
    this.posX += elapsed * this.speed;
  }

  public getScore(): number {
    return this.score;
  }
}
