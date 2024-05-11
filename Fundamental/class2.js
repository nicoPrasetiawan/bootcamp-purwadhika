class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10; 
        //console.log(speed);
        return `${this.make} is speeding at ${this.speed} km/h`;
    }

    break() {
        this.speed -= 5;
        console.log (`${this.make} is speeding at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return `Current US speed is ${this.speed / 1.6} mi/h`
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95)


class EV extends Car{

    #charge;

    constructor (make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge += chargeTo;
        console.log(`Battery charged to ${this.#charge}`)
        return this;
    }

    get charge() {
        return `${this.#charge}%`;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}%`)
        return this;
    }
}

const rivian = new EV('Rivian', 120, 23)
rivian.accelerate().accelerate().accelerate().chargeBattery(50).break().accelerate()


// console.log(rivian, rivian.charge);