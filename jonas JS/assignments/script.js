// ? DZ 1
const country = "Ukraine";
const continent = "Europe";
let population = 42000000;

// console.log(country, continent, population);

// ? DZ 2
const isIsland = false;
let language;

// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof isIsland);
// console.log(typeof language);

// ? DZ 3
language = "Ukrainian";

// console.log(country, continent, population);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof isIsland);
// console.log(typeof language);

// ? DZ 4

console.log("");
console.log("DZ 4");

let halfPopulation = population / 2;
console.log(halfPopulation);

halfPopulation++;
console.log(halfPopulation);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

let description =
    country +
    " is in " +
    continent +
    ", and its " +
    population +
    " people speak " +
    language;
console.log(description);

console.log("         ");

// * ===== CHALLANGE #1 =====

console.log("");
console.log("Challange #1");

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;

let markHighterBMI = BMIMark > BMIJohn;

console.log(markHighterBMI);

massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

BMIMark = Math.floor(((massMark / heightMark ** 2) * 100) / 100);
BMIJohn = Math.floor(((massJohn / heightJohn ** 2) * 100) / 100);

markHighterBMI = BMIMark > BMIJohn;

console.log(markHighterBMI);

//? DZ 5

console.log("");
console.log("DZ 5");

description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

//? DZ 6

console.log("");
console.log("DZ 6");

let averageDifference = averagePopulation - population;

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${averageDifference} below average`
    );
}

population = 13000000;

averageDifference = averagePopulation - population;

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${averageDifference} below average`
    );
}

population = 130000000;

averageDifference = averagePopulation - population;

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${averageDifference} below average`
    );
}

// * ===== CHALLANGE #2 =====

console.log("");
console.log("CHALLANGE 2");

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}

// // ? DZ 7

// console.log("");
// console.log("DZ 7");

// '9' - '5'; // 4
// '19' - '13' + '17'; // 617
// '19' - '13' + 17; // 23
// '123' < 57; // false
// 5 + 6 + '4' + 9 - 4 - 2; // 1143

//? DZ 8

console.log("");
console.log("DZ 8");

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else if (numNeighbours === 0) console.log("No borders");

//? DZ 9

console.log("");
console.log("DZ 9");

