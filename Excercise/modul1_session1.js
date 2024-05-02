// DONE

// Write a code to find area of rectangle.
function rectangleArea(length, width) {
    let calc = length * width;
    console.log(calc); 
}
rectangleArea(5,3);


// Write a code to find perimeter of rectangle.
function rectanglePerimeter(length, width) {
    let calc = 2 * (length + width);
    console.log(calc);
}
rectanglePerimeter(5, 3);


// Write a code to find diameter, circumference and area of a circle.
function rect(radius) {
    let diameter = 2 * radius;
    console.log("Diameter: " + diameter); 

    let circumference = 2 * Math.PI * radius;
    console.log("Circumference: " + circumference );

    let area = Math.PI * Math.pow(radius, 2);
    console.log("Area: " + area);
}
rect(5);


// Write a code to find angles of triangle if two angles are given.
function angleTriangle(a, b) {
    let c = 180 - (a + b);
    console.log(c);
}
angleTriangle(80, 65);


// Write a code to get difference between dates in days.
function dateDifference(date1, date2) {
    let formatedDate1 = new Date(date1); //Merubah bentuk string menjadi format date
    let formatedDate2 = new Date(date2);

    let difInMs = Math.abs(formatedDate1 - formatedDate2); //Pakai method Math.abs() supaya angkanya absolute, jadi kalau minus jadi plus, kalau plus tetap plus
    let difInDays = difInMs / 86400000; // 86400000 conversi dari 1 hari ke milisecond

    console.log("Selisih hari: " + difInDays);
}
dateDifference("2024-06-15", "2024-06-17");


// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
function dayConverter(days) {
    let dayToYear = Math.floor(days / 365);
    let dayToYearRemaining = days % 365;
    let dayToMonth = Math.floor(dayToYearRemaining / 30);
    let remaingDays = dayToYearRemaining % 30;

    console.log(`${days} days(s) -> ${dayToYear} year(s), ${dayToMonth} month(s), ${remaingDays} day(s)`);
}
dayConverter(400);