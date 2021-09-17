var car = {
  direction: 'east',
  xAxis: 0,
  yAxis: 0,
  started: false
};

var carDOM = document.querySelector('.car');

document.addEventListener('keydown', carFunction);

var movementIntervalID;

function carFunction(event) {
  if (event.key === ' ') {
    if (car.started === true) {
      clearInterval(movementIntervalID);
      car.started = false;
    } else {
      if (car.direction === 'north') {
        movementIntervalID = setInterval(carNorth, 16);
      } else if (car.direction === 'south') {
        movementIntervalID = setInterval(carSouth, 16);
      } else if (car.direction === 'west') {
        movementIntervalID = setInterval(carWest, 16);
      } else if (car.direction === 'east') {
        movementIntervalID = setInterval(carEast, 16);
      }
    }
  }
  if (event.key === 'w') {
    carDOM.className = 'north';
    car.direction = 'north';
    if (car.started === true) {
      clearInterval(movementIntervalID);
      movementIntervalID = setInterval(carNorth, 16);
    }
  }
  if (event.key === 'a') {
    carDOM.className = 'west';
    car.direction = 'west';
    if (car.started === true) {
      clearInterval(movementIntervalID);
      movementIntervalID = setInterval(carWest, 16);
    }
  }
  if (event.key === 's') {
    carDOM.className = 'south';
    car.direction = 'south';
    if (car.started === true) {
      clearInterval(movementIntervalID);
      movementIntervalID = setInterval(carSouth, 16);
    }
  }
  if (event.key === 'd') {
    carDOM.className = 'east';
    car.direction = 'east';
    if (car.started === true) {
      clearInterval(movementIntervalID);
      movementIntervalID = setInterval(carEast, 16);
    }
  }
}

function carNorth() {
  car.yAxis--;
  carDOM.style = 'top: ' + car.yAxis.toString() + 'px; left: ' + car.xAxis.toString() + 'px;';
  car.started = true;
}
function carSouth() {
  car.yAxis++;
  carDOM.style = 'top: ' + car.yAxis.toString() + 'px; left: ' + car.xAxis.toString() + 'px;';
  car.started = true;
}
function carWest() {
  car.xAxis--;
  carDOM.style = 'top: ' + car.yAxis.toString() + 'px; left: ' + car.xAxis.toString() + 'px;';
  car.started = true;
}
function carEast() {
  car.xAxis++;
  carDOM.style = 'top: ' + car.yAxis.toString() + 'px; left: ' + car.xAxis.toString() + 'px;';
  car.started = true;
}
