let numberOfCars;
let distance;
let cars = [];

// 1

function getUserInput() {
  do {
    numberOfCars = prompt("Enter number of cars", 2);
  } while (numberOfCars < 0);

  do {
    distance = prompt("Enter distance", 100);
  } while (distance < 0);
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
    return (this.speed -= howMuch);
  }
  move() {
    return (this.distance += this.speed);
  }
}

// 3
// 3.1

const drawCars = (amount) => {
  for (let i = 0; i < amount; i++) {
    cars.push(new Car(i));
  }
};

//3.2

getUserInput();
drawCars(numberOfCars);
