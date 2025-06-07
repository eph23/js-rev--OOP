'use strict';

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/* ********************************************************************************************** */
/*                                            SOLUTION                                            */
/* ********************************************************************************************** */
// Objective 1
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

  brake() {
    this.speed -= 5;
    console.log(
      `Brake!!! The speed of your ${this.make} is now ${this.speed} km/h`
    );
  }
}

class EVCL extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
  };

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `WOOHOO.... The speed of your ${this.make} is now ${
        this.speed
      } km/h and with charge of ${this.#charge}`
    );
  }
}

// 'Rivian' going at 120 km/h, with a charge of 23%
const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
rivian.brake();
rivian.accelerate();
rivian.accelerate();
rivian.chargeBattery(90);
console.log(rivian);
rivian.accelerate();
// console.log(rivian.#charge);
