// 1.1 Write a function to get the lowest, highest and average value in the array (with and without sort function).
// without sort
function sortArray(arr) {
    const lowest = Math.min(...arr);
    const highest = Math.max(...arr);
    const sum = arr.reduce((penambah, nilaiSekarang) => penambah + nilaiSekarang, 0);
    const average = sum / arr.length;

    return {lowest, highest, average};
}
const numbers = [12, 5, 23, 18, 4, 45, 32];
// console.log(sortArray(numbers));

// with sort
function sortArray2(arr) {
    const sortedArray = arr.sort((a,b) => a-b);
    const lowest = sortedArray[0];
    const highest = sortedArray[sortedArray.length-1];
    const average = sortedArray.reduce((a, b) => a + b, 0) / arr.length;

    return {lowest, highest, average};
}
// console.log(sortArray2(numbers));


// 1.2 TODO


// 1.3 split a string and convert it into an array of words
function splitWord(word) {
    return word.split(" ");
}
// console.log(splitWord('Hello World'));


// 1.4 calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
function sumArr(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        throw new Error(`Both arrays must have the same length`)
    }

    const result = [];

    for(let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }

    return result;
}

const arr1 = [1,2,3];
const arr2 = [3,2,1];
// console.log(sumArr(arr1, arr2));



// 1.5 adds an element to the end of an array. However, the element should only be added if it is not already in the array.
function addElement(givenElement, newElement) {
    if(!givenElement.includes(newElement)) {
        givenElement.push(newElement);
    }

    return givenElement;
}
const e = [1,2,3,4];
// console.log(addElement(e, 10));


// 2.1 remove all odd numbers in an array and return a new array that contains even numbers only
function removeOdd(number) {
    const newArr = [];

    for(let i = 0; i < number.length; i++) {
        if(number[i] % 2 === 0) {
            newArr.push(number[i]);
        }
    }

    return newArr
}
const num = [1,2,3,4,5,6];
// console.log(removeOdd(num));


// 2.2 multiple given integer (not an array) to an array and have a maximum size input.
function multipleInt(maxSize, ...num) {
    const newArr = [];

    for(let i of num) { 
        if(newArr.length < maxSize) {
            newArr.push(i);
        }
    }

    return newArr;
}
const int = multipleInt(2, 5, 10, 24, 3, 6, 7, 8);
// console.log(int);


// 2.3 combine 2 given array into one array
function combineArr(array1, array2) {
    const newArr = array1.concat(array2);
    return newArr;
}
const array1 = [1,2,3];
const array2 = [4,5,6];
// console.log(combineArr(array1, array2));


// 2.4 find duplicate values in an array TODO





// 2.5 find the difference in 2 given array
// opsi 1
function findDuplicate(a1, a2) {
    const newArr = [];

    for(let i of a1) {
        if(!a2.includes(i)) {
            newArr.push(i);
        }
    }

    for(let i of a2) {
        if(!a1.includes(i)) {
            newArr.push(i);
        }
    }

    console.log(newArr);
}

// opsi 2
function findDuplicate2(a1, a2) {
    const combinedArr = [...a1, ...a2] // [1,2,3,4,5,3,4,5,6,7]
    
    const newArr = [];
    for(let i of combinedArr) {
        // i ada di a1 dan i tidak ada di a2 || i ada di a2 dan i tidak ada di a1
        const firstCon = a1.includes(i) && !a2.includes(i);
        const secondCon = a2.includes(i) && !a1.includes(i);

        if(firstCon || secondCon) {
            newArr.push(i);
        }
    }

    return newArr;

}
const a1 = [1, 2, 3, 4, 5];
const a2 = [3, 4, 5, 6, 7];
// findDuplicate(a1, a2);
// console.log(findDuplicate2(a1, a2));








var findTheDifference = function(s, t) {
    s = s.split('');
    t = t.split('');

    const combinedArr = [...s, ...t];

    const newArr = [];
    for(let i of combinedArr) {
        // i ada di s dan i ga ada di t
        const firstCon = s.includes(i) && !t.includes(i);
        //i ada di t dan i ga ada di s
        const secondCon = t.includes(i) && !s.includes(i);

        if(firstCon || secondCon) {
            newArr.push(i);
        }
    }

    const result = newArr.join("")
    return result;

};

const s = "a";
const t = "aa";
console.log(findTheDifference(s, t));