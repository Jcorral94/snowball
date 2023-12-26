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
    this.alpha = Math.random() * 1;
  }

  show() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
    this.ctx.fill();
    this.ctx.closePath();
  }
  update(timestamp) {
    this.speed += this.velocity;
    this.y += this.speed;
    const swayOffset = Math.sin(timestamp * this.swayFrequency) * this.swayAmplitude;
    this.x += swayOffset;

  }
}
