'use strict';

function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const nico = new Person('Nico', 1994);
console.log(nico);

const matilda = new Person('Matilda', 2000);
const jack = new Person ('Jack', 1889);

console.log(jack instanceof Person)


// prototype
console.log(Person.prototype);
Person.prototype.calcAge = function() {
    console.log(2024 - this.birthYear)
}

nico.calcAge();

console.log(nico.__proto__);

console.log(Person.prototype.isPrototypeOf(nico));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(matilda);
