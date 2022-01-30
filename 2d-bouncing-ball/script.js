const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let radius = 20;
let color = "#0000ff";
let g = 0.1;
let x = 50;
let y = 50;
let vx = 1;
let vy = 0;

window.onload = init;

function init() {
  setInterval(onEachStep, 1000 / 60);
}

function onEachStep() {
  vy += g;
  x += vx;
  y += vy;
  if (y >= canvas.height - radius * 0.5) {
    y = canvas.height - radius;
    vy *= -0.8;
  }
  if (x > canvas.width + radius) {
    x = -radius;
  }
  drawBall();
}

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
}
