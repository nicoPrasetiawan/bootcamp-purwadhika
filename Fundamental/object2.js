const person = {
    firstName: 'Nico',
    lastName: 'Prasetiawan',
    age: 29,
    address: {
        country: 'Indonesia',
        city: 'Jakarta'
    },
    greet() {
        return `Hello, I'm ${this.firstName}`;
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(val) {
        const splittedVal = val.split(" ");
        // console.log(splittedVal);
        this.firstName = splittedVal[0];
        this.lastName = splittedVal[1]
    }
}

// console.log(person);
// console.log(person['firstName'])
// console.log(person.address?.city);
// console.log(Object.keys(person));
console.log(person.greet());
person.fullName = 'Nick Jonas'
console.log(person.fullName);


for(let i in person) {
    // console.log(i, person[i]);
}


let a, b;
[a, b] = [10, 20]

console.log(a, b);
// console.log(b);


const car = {
    brand: 'Ferarri',
    price: 1000000,
    owner: 'Nico'
}

const {brand, price, owner} = car

console.log(owner);


const arr1 = [1,2,3]
const arr2 = [4,5,6]
const combinedArr = [...arr1, ...arr2]
// console.log(combinedArr);


const obj1 = {name: 'John'}
const obj2 = {email: 'john@gmail.com'}
const combinedObj1 = {...obj1, ...obj2};
const combinedObj2 = Object.assign(obj2, obj1)
console.log(combinedObj1);
console.log(combinedObj2);