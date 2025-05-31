'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const eph = new Person('Ephraim', 1988);
console.log(eph);
console.log(eph.calcAge());

const matilda = new Person('Matilda', 2017);
const bob = new Person('Bob', 1975);
console.log(matilda);
console.log(bob);
