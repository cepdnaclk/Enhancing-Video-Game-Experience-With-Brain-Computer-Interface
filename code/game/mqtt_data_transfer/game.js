var myGamePiece;
var myObstacle;
var target;

// function myFunction(event) {
//   var x = event.key;
//   document.getElementById("demo").innerHTML = "The pressed key was: " + x;

//   if (x == "ArrowUp") {
//     moveup();
//   } else if (x == "ArrowDown") {
//     movedown();
//   } else if (x == "ArrowLeft") {
//     moveleft();
//   } else if (x == "ArrowRight") {
//     moveright();
//   }
// }

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  target = new component(30, 30, "blue", 20, 120);
  myObstacle = new component(10, 200, "green", 300, 120);
  myGameArea.start();
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 400;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 1000);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateGameArea() {
  myGameArea.clear();
  myObstacle.update();
  target.update();
  myGamePiece.newPos();
  myGamePiece.update();
}

function moveup() {
  myGamePiece.speedY = -10;
}

function movedown() {
  myGamePiece.speedY = 10;
}

function moveleft() {
  myGamePiece.speedX = -10;
}

function moveright() {
  myGamePiece.speedX = 10;
}

function clearmove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}
