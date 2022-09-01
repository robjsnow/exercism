//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
  this.balance = 0;
  this.active = false;
  }

  open() {
      if (this.active) {
     throw new ValueError();
  }
  this.active = true;
  }

  close() {
      if (!this.active) {
     throw new ValueError();
  }
  this.balance = 0;
  this.active = false;
  }

  deposit(amount) {
      if (!this.active || amount < 1) {
     throw new ValueError();
  }

  this.balance += amount;
  }

  withdraw(amount) {
      if (!this._active) {
     throw new ValueError();
  }
    if (amount > this._balance || amount < 0) {
           throw new ValueError();
    }

   this._balance -= amount;

  }

  get balance() {
  if (!this._active) {
     throw new ValueError();
  }
  return this._balance;

  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
