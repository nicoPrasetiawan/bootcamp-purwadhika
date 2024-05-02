let word = "Hello World";
word = word.toUpperCase();

console.log(word);

let nama = "Nico";
let message = `Welcome, ${nama}`;

console.log(message);


let number = 123;
console.log(number);
number = number.toString();
console.log(number);

console.log("---------------------");

let beforeSlice = "Halo";
let afterSlice = beforeSlice.slice(1, 3); // expected output: al
console.log(afterSlice);

let beforeSubstring = "Halo";
let afterSubstring = beforeSubstring.substring(1, 3);
console.log(afterSubstring);

let concatString = beforeSlice.concat(beforeSubstring); //expected output: HaloHalo
console.log(concatString);

let beforeTrim = "   Halo   ";
console.log("before trim: " + beforeTrim);
let afterTrim = beforeTrim.trim();
console.log("after trim: " + afterTrim);

let unpadedStr = "8";
let padedStr = unpadedStr.padStart(5, "0"); //expected output: 00008
console.log(padedStr);

console.log(beforeSubstring.charAt(2)); //expected output: l