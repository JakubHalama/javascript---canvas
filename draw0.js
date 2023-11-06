let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.code === "Escape") {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }

  switch (event.code) {
    case "KeyS":
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let size = Math.random() * 100 + 50;
      let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      drawRectangle(x, y, size, size, col);
      break;
    case "KeyE":
      randomEllipse();
      break;
    case "KeyT":
      drawTriangle();
      break;
    case "KeyP":
      drawPentagon();
      break;
    case "KeyH":
      drawStar();
      break;
  }
});

function randomEllipse() {
  let w = Math.random() * 100 + 50;
  let h = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - w) + w / 2;
  let y = Math.random() * (canvas.height - h) + h / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawEllipse(x, y, w, h, c);
}

function drawRectangle(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.strokeStyle = col;
  ctx.strokeRect(x, y, w, h);
}

function drawEllipse(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
  ctx.fill();
}

function drawTriangle() {
  let x1 = Math.random() * canvas.width;
  let y1 = Math.random() * canvas.height;
  let x2 = Math.random() * canvas.width;
  let y2 = Math.random() * canvas.height;
  let x3 = Math.random() * canvas.width;
  let y3 = Math.random() * canvas.height;
  if (
    x1 >= 0 && x1 <= canvas.width && y1 >= 0 && y1 <= canvas.height &&
    x2 >= 0 && x2 <= canvas.width && y2 >= 0 && y2 <= canvas.height &&
    x3 >= 0 && x3 <= canvas.width && y3 >= 0 && y3 <= canvas.height
  ) {
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
  }
}

function drawPentagon() {
  let x1 = Math.random() * canvas.width;
  let y1 = Math.random() * canvas.height;
  let x2 = Math.random() * canvas.width;
  let y2 = Math.random() * canvas.height;
  let x3 = Math.random() * canvas.width;
  let y3 = Math.random() * canvas.height;
  let x4 = Math.random() * canvas.width;
  let y4 = Math.random() * canvas.height;
  let x5 = Math.random() * canvas.width;
  let y5 = Math.random() * canvas.height;
  if (
    x1 >= 0 && x1 <= canvas.width && y1 >= 0 && y1 <= canvas.height &&
    x2 >= 0 && x2 <= canvas.width && y2 >= 0 && y2 <= canvas.height &&
    x3 >= 0 && x3 <= canvas.width && y3 >= 0 && y3 <= canvas.height &&
    x4 >= 0 && x4 <= canvas.width && y4 >= 0 && y4 <= canvas.height &&
    x5 >= 0 && x5 <= canvas.width && y5 >= 0 && y5 <= canvas.height
  ) {
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x5, y5);
    ctx.closePath();
    ctx.fill();
  }
}

function drawStar() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let size = Math.random() * 50 + 20;
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawStarShape(x, y, size, col);
}

function drawStarShape(x, y, size, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    ctx.lineTo(x + size * Math.cos((18 + i * 72) * Math.PI / 180), y + size * Math.sin((18 + i * 72) * Math.PI / 180));
    ctx.lineTo(x + size / 2 * Math.cos((54 + i * 72) * Math.PI / 180), y + size / 2 * Math.sin((54 + i * 72) * Math.PI / 180));
  }
  ctx.closePath();
  ctx.fill();
}
