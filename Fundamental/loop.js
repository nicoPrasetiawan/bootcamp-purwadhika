

// for(let i = 0; i<3; i++) {
//     console.log("Halo");
// }

const nico = [
    'Nico',
    'Prasetiawan',
    2024 - 1994,
    'CEO',
    ['John', 'Smith', 'Jack']
]

// console.log(nico.length);

for(let i = nico.length - 1; i >= 0; i--) {
    // console.log(i, nico[i]);
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip)

    const total = tips[i] + bills[i];
    totals.push(total);
}
// console.log(tips);
// console.log(totals);


function calcAverage(arr) {
    let sum = 0; //1

    for(let i=0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / arr.length;
}

console.log(calcAverage(totals));