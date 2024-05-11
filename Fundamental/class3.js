class Account {

    // Private fields
    #movements = []
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.#movements = [];

        console.log(`---${this.owner} Bank Account---`)
    }

    deposit(amount) {
        this.#movements.push(amount);
        return this;
    }

    withdrawl(amount) {
        this.#movements.push(-amount);
        return this;

    }

    requestLoan(amount) {
        if(this.#approveLoan(amount)) {
            this.#movements.push(amount);
        }
        return this;
    }

    getMovement() {
        return this.#movements;
    }

    // private methods
    #approveLoan(amount) {
        return true
    }
}

const john = new Account('John', 'IDR', 1111);
john.deposit(100)
john.withdrawl(50)
john.requestLoan(100)
// console.log(john.getMovement())

// console.log(john.#movements);

// console.log(john);

john.deposit(123).deposit(333).withdrawl(240)
// console.log(john.getMovement())

console.log(john.deposit())