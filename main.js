var car = {
  direction: 'east',
  xAxis: 0,
  yAxis: 0
};

var carDOM = document.querySelector('.car');

document.addEventListener('keydown', carFunction);

function carFunction(event) {
  if (event.key === ' ') {
    if (car.direction === 'north') {
      setInterval(function () { car.yAxis--; carDOM.style = 'top: ' + car.yAxis.toString() + 'px; left: ' + car.xAxis.toString() + 'px;'; }, 16);
    } else if (car.direction === 'south') {
      setInterval(function () { car.yAxis++; carDOM.style = 'top: ' + car.yAxis.toString() + 'px; left: ' + car.xAxis.toString() + 'px;'; }, 16);
    } else if (car.direction === 'west') {
      setInterval(function () { car.xAxis--; carDOM.style = 'top: ' + car.yAxis.toString() + 'px; left: ' + car.xAxis.toString() + 'px;'; }, 16);
    } else if (car.direction === 'east') {
      setInterval(function () { car.xAxis++; carDOM.style = 'top: ' + car.yAxis.toString() + 'px; left: ' + car.xAxis.toString() + 'px;'; }, 16);
    }

  }
  if (event.key === 'w') {
    carDOM.className = 'north';
    car.direction = 'north';
  }
  if (event.key === 'a') {
    carDOM.className = 'west';
    car.direction = 'west';
  }
  if (event.key === 's') {
    carDOM.className = 'south';
    car.direction = 'south';
  }
  if (event.key === 'd') {
    carDOM.className = 'east';
    car.direction = 'east';
  }
}
