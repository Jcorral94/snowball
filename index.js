const CANVAS = document.querySelector('#canvas');
const CTX = CANVAS.getContext('2d');
const CANVAS_BACKGROUND = 'black';
let snowballs;
let snowBallWorld;

init();

function init() {
  canvasSize(innerWidth, innerHeight);
  updateCanvas();
  snowballs = Array.from({ length: 10000 }, (_, i) => {
    return new SnowBall(CTX, Math.random() * CANVAS.width, Math.random() * -1000, Math.random() * 3, CANVAS);
  });
  snowBallWorld = new SnowBalls(snowballs);
  window.requestAnimationFrame(draw);
}
function canvasSize(width, height) {
  if (!CANVAS) return;

  CANVAS.width = width;
  CANVAS.height = height;
}
function updateCanvas() {
  CTX.fillStyle = CANVAS_BACKGROUND;
  CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
}
function draw(timestamp) {
  updateCanvas();
  snowBallWorld.show(timestamp);
  window.requestAnimationFrame(draw);
}