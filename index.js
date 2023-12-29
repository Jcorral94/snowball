const CANVAS = document.querySelector('#canvas');
const CTX = CANVAS.getContext('2d');
const CANVAS_BACKGROUND_COLOR = 'black';
const NUMBER_OF_SNOWBALLS = 100;
const MAX_SNOWBALL_SIZE = 0.7;

let snowballs;
let snowBallWorld;

init();
window.addEventListener('resize', () => {
  canvasSize(innerWidth, innerHeight);
});
function init() {
  canvasSize(innerWidth, innerHeight);
  updateCanvas();
  snowballs = Array.from({ length: NUMBER_OF_SNOWBALLS }, (_, i) => {
    // return new SnowBall(CTX, CANVAS.width / 2, CANVAS.height / 2, 2, CANVAS);
    return new SnowBall(CTX, Math.random() * CANVAS.width, Math.random() * -10, Math.random() * MAX_SNOWBALL_SIZE, CANVAS);
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
  CTX.fillStyle = CANVAS_BACKGROUND_COLOR;
  CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
}
function draw(timestamp) {
  updateCanvas();
  snowBallWorld.show(timestamp);
  window.requestAnimationFrame(draw);
}
