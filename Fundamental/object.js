const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / (Math.pow(this.height, 2));
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (Math.pow(this.height, 2));
        return this.bmi;
    }
}

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

const result = mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})` : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`;
console.log(result);


const nico = {
    firstName: 'Nico',
    lastName: 'Prasetiawan',
    birthYear: 1994,
    job: 'CEO',
    friends: ['John', 'Smith', 'Leo'],
    hasDriverLicense: true,

    // calcAge: function() {
    //     // console.log(this);
    //     return 2024 - nico.birthYear;
    // }

    calcAge: function() {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense === true ? "a" : "no"} driver's license`;
    }
}

// console.log(nico.calcAge());
// console.log(nico.age);
console.log(nico.getSummary());


const account = {
    owner: 'John',
    movement: [200, 120, 394, 583],

    get latest() {
        return this.movement[this.movement.length-1];
    },

    set latest(mov) {
        return this.movement.push(mov);
    }
}

console.log(account.latest)
account.latest = 199;
console.log(account.latest)