// -----------DONE------------"

// 1. Write a code to display the multiplication table of a given integer.
function multiply(n) {

    for(let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n*i}`);
    }
}
//multiply(9);



// 2. Write a code to check whether a string is a palindrome or not.
// Opsi 1
function palindrome(word) {
    let comparator = "";

    for(let i = word.length - 1; i >= 0; i--) {
        comparator += word.charAt(i);
    }

    const result = word === comparator ? `${word} is palindrom` : `${word} is NOT palindrome`;
    return result;

}
const sentc1 = palindrome('Dhea');
const sentc2 = palindrome('apa');
const sentc3 = palindrome('Nababan');
//console.log(sentc1, sentc2, sentc3);

// Opsi 2
const palindrom2 = function(word) {
    const reversedWord = word.split('').reverse().join("");

    const result = reversedWord === word ? `${word} is palindrom` : `${word} is NOT palindrome`;
    return result;
}
//console.log(palindrom2('nababan'));


// 3. Write a code to convert centimeter to kilometer.
const toKm = centimer => {
    return `${centimer / 100000} km`;
}
//console.log(toKm(100000));


// 4. Write a code to format number as currency (IDR)
function toIdrFormat(value) {
    value = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(value);

    return value;
}
// console.log(toIdrFormat(97003));


// 5. Write a code to remove the first occurrence of a given “search string” from a string
function removeFirstOccurrence(mainString, searchString) {
    return mainString.replace(searchString, "");
}
//console.log(removeFirstOccurrence('Nama saya Budi', 'Nama'));


// 6. Write a code to capitalize the first letter of each word in a string
function capitalizeFirstLetter(letter) {
    const arrLetter = letter.split(" ");

    for(let i = 0; i < arrLetter.length; i++) {
        arrLetter[i] = arrLetter[i].charAt(0).toUpperCase() + arrLetter[i].slice(1);
    }

    const result = arrLetter.join(" ");

    // console.log(arrLetter);
    // console.log(result);
    return result;
}
// console.log(capitalizeFirstLetter('i gede Bagus kosha'));


// 7. Write a code to reverse a string.
function reverseString(string) {
    const reversedString = string.split("").reverse().join("");

    console.log(reversedString);
}
// reverseString('hello');


// 8. Write a code to swap the case of each character from string
function swapLetter(letter) {
    const splittedLetter = letter.split("");

    for(let i = 0; i < splittedLetter.length; i++) {
        if(splittedLetter[i] === splittedLetter[i].toUpperCase()) {
            splittedLetter[i] = splittedLetter[i].toLowerCase();
        } else {
            splittedLetter[i] = splittedLetter[i].toUpperCase();
        }
    }

    const result = splittedLetter.join("");

    // console.log(splittedLetter);
    console.log(result);
}
// swapLetter(`The QuiCk BrOwN Fox`);


// 9. Write a code to find the largest of two given integers
function largestNum(num1, num2) {
    const largest = Math.max(num1, num2);
    return largest;
}
// console.log(largestNum(15, 76));


// 10. Write a conditional statement to sort three numbers
// opsi 1
function numSorter1(num1, num2, num3) {
    const numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
}
// numSorter1(42, 27, 18);

// opsi 2
function sortNumbers(a, b, c) {
    let sortedNumbers = [];

    if (a <= b && a <= c) {
        sortedNumbers.push(a);
        if (b <= c) {
            sortedNumbers.push(b);
            sortedNumbers.push(c);
        } else {
            sortedNumbers.push(c);
            sortedNumbers.push(b);
        }
    } else if (b <= a && b <= c) {
        sortedNumbers.push(b);
        if (a <= c) {
            sortedNumbers.push(a);
            sortedNumbers.push(c);
        } else {
            sortedNumbers.push(c);
            sortedNumbers.push(a);
        }
    } else {
        sortedNumbers.push(c);
        if (a <= b) {
            sortedNumbers.push(a);
            sortedNumbers.push(b);
        } else {
            sortedNumbers.push(b);
            sortedNumbers.push(a);
        }
    }

    return sortedNumbers;
}
// console.log(sortNumbers(42, 27, 18));


// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
function checkArgument(input) {
    if(typeof input === "string") {
        return 1;
    } else if(typeof input === "number") {
        return 2;
    } else {
        return 3;
    }
}
// console.log(checkArgument(true));


// 12. Write a code to change every letter a into * from a string of input
const changeLetter = function(letter) {
    const toArray = letter.split("");

    for(let i in toArray) {
        if(toArray[i] === 'A' || toArray[i] === 'a') {
            toArray[i] = '*';
        }
    }

    const result = toArray.join("");

    console.log(toArray);
    console.log(result);
}
changeLetter('An apple a day keeps the doctor away')