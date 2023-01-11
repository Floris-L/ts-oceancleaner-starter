class FlappyBird {
  private x: number;
  private y: number;
  private velocity: number;

  public constructor() {
    this.x = 0;
    this.y = 0;
    this.velocity = 0;
  }

  public flap() {
    this.velocity = -10;
  }

  public update() {
    this.velocity += 1;
    this.y += this.velocity;
  }

  public getX() {
    return this.x;
  }

  public getY() {
    return this.y;
  }
}
