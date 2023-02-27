const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let turtle = { x: canvas.width / 2, y: canvas.height / 2, angle: 0 };

function moveForward(distance) {
  const dx = Math.cos(turtle.angle) * distance;
  const dy = Math.sin(turtle.angle) * distance;
  const newX = turtle.x + dx;
  const newY = turtle.y + dy;

  if (newX < 0 || newX > canvas.width || newY < 0 || newY > canvas.height) {
    return;
  }

  ctx.beginPath();
  ctx.moveTo(turtle.x, turtle.y);
  ctx.lineTo(newX, newY);
  ctx.stroke();

  turtle.x = newX;
  turtle.y = newY;
}

function turnLeft(angle) {
  turtle.angle -= (angle * Math.PI) / 180;
}

function turnRight(angle) {
  turtle.angle += (angle * Math.PI) / 180;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  turtle = { x: canvas.width / 2, y: canvas.height / 2, angle: 0 };
}

document.getElementById('move').addEventListener('click', () => {
  const distance = Number(document.getElementById('distance').value);
  moveForward(distance);
});

document.getElementById('left').addEventListener('click', () => {
  const angle = Number(document.getElementById('angle').value);
  turnLeft(angle);
});

document.getElementById('right').addEventListener('click', () => {
  const angle = Number(document.getElementById('angle').value);
  turnRight(angle);
});

document.getElementById('clear').addEventListener('click', () => {
  clearCanvas();
});