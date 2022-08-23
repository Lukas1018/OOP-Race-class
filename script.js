// susirenkam vartotojo input +
// susikuriam Car klasę +
// nusipiešiam auto ir finish line
// nustatom kiekvieno auto greitį
// judinam (move) kiekviena auto
// tikrinam win case scenario
// pridedam winner text
// pridedam info text
// pakeičiam div į auto img
// pakeičiam div į finish line img
// jei reikės -> fixes ir updates
// extra task - konvertuoti ES6 į ES5 sintaksę
// todo darysim su git ir git commitais

let numberOfCars;
let distance;
let cars = [];

// 1

function getUserInput() {
  do {
    numberOfCars = Number(prompt("Enter number of cars", 5));
  } while (numberOfCars < 0);

  do {
    distance = Number(prompt("Enter distance", 100));
  } while (!Number.isInteger(distance) && distance > 0);
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

// 3 function drawCars(numberOfCars) kuri nupiesia tiek auto kiek ivesta userio.
// 3.1 susikuriam tuscia array globaliai cars i kuri supushinsim tiek objektu, kiek useris ivede auto lenktyniauti;
// kurti panaudojant klase Car ir sukti loopa kol pasieksim numberOfCars;
// kaip parametra i Car klase, paduoti array indexa (i);

const drawCars = (amount) => {
  for (let i = 0; i < amount; i++) {
    cars.push(new Car(i));
  }

  //3.2 sukt loopa per visus car array objektus ir kiekvienam is ju:
  // sukurti nauja HTML elementa div, prideti klase 'car', nurodyti pozicija per .style.top = 60 * car.id + 'px'
  // ir appendinti i dokumenta.

  cars.forEach((car) => {
    const newCar = document.createElement("div");
    newCar.classList.add("car");
    newCar.style.top = 60 * car.id + "px";
    document.body.append(newCar);
  });
};

function drawFinishLine(amountOfCars, linelength) {
  const line = document.createElement("div");
  line.classList.add("finishLine");
  line.style.left = distance + 100 + "px";
  line.style.height = cars.length * 60 + "px";
  document.body.append(line);
}

getUserInput();
drawCars(numberOfCars);
drawFinishLine(numberOfCars, distance);
