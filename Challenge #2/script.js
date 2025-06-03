'use strict';
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

// Coding Challenge #1
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `WOOHOO.... The speed of your ${this.make} is now ${this.speed} hm/h`
    );
  }

  break() {
    this.speed -= 5;
    console.log(
      `Brake!!! The speed of your ${this.make} is now ${this.speed} hm/h`
    );
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new CarCl('BMW', 120);
const mercedes = new CarCl('Mercedes', 95);

console.log(bmw.speedUS);
console.log(mercedes.speedUS);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();
console.log(bmw.speedUS);
bmw.speedUS = 50;
console.log(bmw.speedUS);

mercedes.accelerate();
mercedes.break();
mercedes.break();
mercedes.break();
console.log(bmw.speedUS);
