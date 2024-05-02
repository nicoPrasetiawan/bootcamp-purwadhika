// ON GOING
let separator = "------------------------------"

//Write a code to convert celsius to fahrenheit
console.log("Convert celsius to fahrenheit");
function celciusToFahrenheit(celsius) {
    let toFahrenheit = (celsius * 9/5) + 32;

    let message = celsius + " Celsius -> " +  toFahrenheit + " Fahrenheit";

    console.log(message);
}
celciusToFahrenheit(60);

console.log(separator);

//Write a code to check whether the number is odd or even
console.log("Check whether the number is odd or even");
function numChecker(num) {
    let message = ""

    if(num % 2 === 0) {
        message = num + " -> even number";
    } else {
        message = num + " -> odd number";
    }

    console.log(message);
}
numChecker(7);

console.log(separator);

//Write a code to check whether the number is prime number or not
// bilangan yang hanya bisa dibagi 1 dan bilangan itu sendiri... punya 2 pembagi habis
console.log("check whether the number is prime number or not");
function isPrime(n) {
    let divider = 0;

    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            divider++
        }
    }

    let result = divider === 2 ? `${n} is a prime number.` : `${n} is NOT a prime number`;
    console.log(result);
}
isPrime(6);


console.log(separator);

//Write a code to find the sum of the numbers 1 to N
console.log("Sum of the numbers 1 to N");

function sumToN(n) {
    let increaser = 0;

    for(let i = 1; i <= n; i++) {
        increaser += i;
    }
    return `${n} -> ${increaser}`;
}
console.log(sumToN(5));


console.log(separator);

// Write a code to find factorial of a number
console.log("find factorial of a number");
function factorianNum(n) {
    let result = 1;

    for(let i = n; i > 0; i--) {
        result *= i;
    }

    return `${n}! -> ${result}`
}
console.log(factorianNum(6));

console.log(separator);

//Write a code to print the first N fibonacci numbers
console.log("print the first N fibonacci numbers");

function fibb(n) {
    let a = 0;
    let b = 1;
    let nextNum = 0;

    for(let i = 1; i < n; i++) {
        nextNum = a + b;
        a = b;
        b = nextNum;
    }

    return `${n} -> ${nextNum}`;
}

console.log(fibb(15));