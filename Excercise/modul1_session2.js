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



console.log(separator);

//Write a code to find the sum of the numbers 1 to N
console.log("Sum of the numbers 1 to N");
function sumToN(n) {
    let sum = 0;

    for(let i = 0; i < n; i++) {
        sum += n;
    }
}