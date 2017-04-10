let ball = document.querySelector('.ball');

let position = 0;

setInterval(function() {
  position += 50;
  ball.style.top = position + 'px';
}, 100);
