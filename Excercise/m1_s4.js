// -----------ON GOING------------"






// 2. fizzBuzz
function fizzBuzz(n) {
    const arr = [];

    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz')
        } else if (i % 3 === 0) {
            arr.push('Fizz')
        } else if (i % 5 === 0) {
            arr.push('Buzz')
        } else {
            arr.push(i);
        }
    }

    return arr.join(", ");
}
// console.log(fizzBuzz(15));



// 3. calculate Body Mass Index (BMI)
function calculateBmi(weight, height) {
    const calc = Math.floor(weight / Math.pow(height, 2));
    let result = "";

    if(calc < 18.5) {
        result = `${calc} -> Less weight`;
    } else if(calc <= 24.9) {
        result = `${calc} -> Ideal`;
    } else if(calc <= 29.9) {
        result = `${calc} -> overweight`;
    } else if(calc <= 39.9) {
        result = `${calc} -> very overweight`;
    } else {
        result = `${calc} -> obesity`;
    }

    return result;
}
// console.log(calculateBmi(120, 1.8));


// 4. remove all odd numbers in an array and return a new array that contains even numbers only
function removeOddNum(arr) {
    const newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(removeOddNum(numbers));


// 5. split a string and convert it into an array of words
const splitWord = function(word) {
    const splitedWord = word.split(" ");
    return splitedWord;
}
// console.log(splitWord("Hello My World"));