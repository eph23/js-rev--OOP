'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

Person.hey = function () {
  console.log(`Hey there 👋`);
  console.log(this);
};

Person.hey();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);

PersonCl.hey();
