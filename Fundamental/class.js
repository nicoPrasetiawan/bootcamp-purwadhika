'use strict';

class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        return 2024 - this.birthYear;
    }

    get age() {
        return 2024 - this.birthYear;
    }

    // set a property that already exist, add underscore (_) || IMPORTANT
    set fullName(name) {
        if(name.includes(' ')) {
            this._fullName = name;
        } else {
            throw new Error(`${name} is not a full name`)
            // alert(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName
    }

    static hey() {
        console.log(`hey there 👋`);
    }
}

// const dhea = new Person('Dhea Lafitri', 1997);
// console.log((dhea.__proto__ === Person.prototype));
// console.log(dhea.fullName);
// Person.hey(); 

class Student extends Person {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        return `Hi there, my name is ${this.fullName}`
    }
}

const david = new Student('David Jr', 1992, 'Psichology')
console.log(david);

console.log(david.introduce());