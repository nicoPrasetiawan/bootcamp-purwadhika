const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10; 
    //console.log(speed);
    return `${this.make} is speeding at ${this.speed} km/h`;
}

Car.prototype.break = function() {
    this.speed -= 5;
    return `${this.make} is speeding at ${this.speed} km/h`;
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95)

console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.break());
console.log(bmw.accelerate());