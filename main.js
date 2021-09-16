var car = {
  direction: 'east'
};

var carDOM = document.querySelector('.car');

document.addEventListener('keydown', carFunction);

function carFunction(event) {
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
