'use strict';

class Account {
  // Encapsulation
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.getMovements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }

    return this;
  }

  static test() {
    console.log(true);
  }
}

const acc1 = new Account('Eph', 'USD', 1111);
// acc1.deposit(300);
// acc1.withdraw(100);
const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000);
// .getMovements()

console.log(acc1);
// acc1.#approveLoan();
console.log(movements);
