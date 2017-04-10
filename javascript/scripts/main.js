Ofunction getRandomColor() {
  let color =  'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255);
  return color
}

function randomSize() {
  let size = (0.25 + Math.random()) * 1.8;
  return size;
}

function generateBall() {
  let ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.backgroundColor = getRandomColor();
  document.body.appendChild(ball);
  return {
    xPos: Math.random() * (window.innerWidth - 50),
    yPos: Math.random() * (window.innerHeight - 50),
    xSpeed: 1 + Math.random() * (5),
    ySpeed: 1 + Math.random() * (5),
    ballSize: randomSize(),
    elem: ball
  };
}

function ballMovement(ball) {
  ball.xPos += ball.xSpeed;
  ball.yPos += ball.ySpeed;

  ball.elem.style.transform = 'translate(' + ball.xPos + 'px,' + ball.yPos + 'px) scale(' + ball.ballSize + ')';

  if (ball.xPos >= (window.innerWidth - ball.elem.clientWidth) || ball.xPos <= 0) {
    ball.xSpeed *= -1;
  }

  if (ball.yPos >= (window.innerHeight - ball.elem.clientHeight) || ball.yPos <= 0) {
    ball.ySpeed *= -1;
  }
}

let ballsArr = [];
for (let i = 0; i <= 200; i++) {
  let ball = generateBall();
  ballsArr.push(ball)
}

setInterval(function() {
  for (let i = 0; i < ballsArr.length; i++) {
    ballMovement(ballsArr[i]);
  }
}, 30);


// let squares = document.querySelectorAll('.squares');
//
// let clickHandler = function(event) {
//   event.target.classList.toggle('red');
// };
//
// for (let i = 0; i < squares.length; i++) {
//   squares[i].addEventListener("click", clickHandler);
// }
