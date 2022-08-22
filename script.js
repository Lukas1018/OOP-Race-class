let numberOfCars = 0;
let distance = 0;

// 1

function getUserInput() {
  numberOfCars = prompt("Enter number of cars", 5);

  while (numberOfCars < 0) {
    numberOfCars = prompt("Enter number of cars", 5);
  }

  distance = prompt("Enter distance", 100);

  while (distance < 0) {
    distance = prompt("Enter distance", 100);
  }
}

// 2

class Car {
  constructor(id) {
    this.id = id;
    this.speed = 0;
    this.distance = 0;
  }
  accelerate(howMuch) {
    return (this.speed += howMuch);
  }
  slowDown(howMuch) {
    this.speed -= howMuch;
  }
  move() {
    this.distance += this.speed;
  }
}

getUserInput();
