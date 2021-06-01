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

// * ===== CHALLENGE #1 =====

console.log("");
console.log("Challenge #1");

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;

let markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

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

// * ===== CHALLENGE #2 =====

console.log("");
console.log("CHALLENGE 2");

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

// console.log("");
// console.log("DZ 8");
//
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
//
// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else if (numNeighbours === 0) console.log("No borders");

//? DZ 9

console.log("");
console.log("DZ 9");

if (language === "English" && (population < 50000000) && isIsland === true) {
    console.log(`You should live in Ukraine :)`);
} else {
    console.log(`Ukraine does not meet your criteria :(`);
}

// * ===== CHALLENGE #3 =====

console.log("");
console.log("CHALLENGE 3");

let dolphinsScore1 = 97;
let dolphinsScore2 = 87;
let dolphinsScore3 = 81;

let koalasScore1 = 10;
let koalasScore2 = 9;
let koalasScore3 = 16;

let averageScoreDolphins = Math.floor((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3);
let averageScoreKoalas = Math.floor((koalasScore1 + koalasScore2 + koalasScore3) / 3);

if ((averageScoreDolphins > averageScoreKoalas) && (averageScoreDolphins >= 100)) {
    console.log(`${averageScoreDolphins}, Dolphins win`);
} else if ((averageScoreDolphins < averageScoreKoalas) && (averageScoreKoalas >= 100)) {
    console.log(`${averageScoreKoalas}, Koalas win`);
} else if ((averageScoreDolphins === averageScoreKoalas) && (averageScoreDolphins >= 100) && (averageScoreKoalas >= 100)) {
    console.log(`${averageScoreDolphins} Dolphins, ${averageScoreKoalas} Koalas, Draw`);
} else {
    console.log(`${averageScoreDolphins} Dolphins, ${averageScoreKoalas} Koalas, no one wins`);
}