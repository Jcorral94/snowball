class SnowBall {
  constructor(ctx, x, y, size, canvas) {
    // TODO: use mass to dictate speed / velocity;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.size = size;
    this.canvas = canvas;
    this.velocity = Math.random() * 0.002;
    this.speed = 0;
    this.mass = null;
    this.swayAmplitude = Math.random() * 0.2 + 0.1;
    this.swayFrequency = Math.random() * 0.001;
    this.alpha = 0.7;
    this.color = `rgba(255,255,255,${this.alpha})`;
  }

  show() {
    this.createLayerOne();
    this.createLayerTwo();
    this.createLayerThree();
  }
  createLayerOne() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
  createLayerTwo() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size * 2, 0, 2 * Math.PI);
    this.ctx.fillStyle = `rgba(255,255,255, 0.55)`;
    this.ctx.fill();
    this.ctx.closePath();
  }
  createLayerThree() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size * 2.5, 0, 2 * Math.PI);
    this.ctx.fillStyle = `rgba(255,255,255, 0.15)`;
    this.ctx.fill();
    this.ctx.closePath();
  }
  update(timestamp) {
    this.speed += this.velocity;
    this.y += this.speed;
    if (this.y > CANVAS.height) {
      this.y = Math.random() * -100;
      this.speed = 0;
      this.velocity = Math.random() * 0.002;
      // this.color = `rgba(255, 0, 0, ${this.alpha})`;
    }
    const swayOffset = Math.sin(timestamp * this.swayFrequency) * this.swayAmplitude;
    this.x += swayOffset;

  }
}
