// // ? DZ 1
// const country = "Ukraine";
// const continent = "Europe";
// let population = 42000000;
//
// // console.log(country, continent, population);
//
// // ? DZ 2
// const isIsland = false;
// let language;
//
// // console.log(typeof population);
// // console.log(typeof country);
// // console.log(typeof isIsland);
// // console.log(typeof language);
//
// // ? DZ 3
// language = "Ukrainian";
//
// // console.log(country, continent, population);
// // console.log(typeof population);
// // console.log(typeof country);
// // console.log(typeof isIsland);
// // console.log(typeof language);
//
// // ? DZ 4
//
// console.log("");
// console.log("DZ 4");
//
// let halfPopulation = population / 2;
// console.log(halfPopulation);
//
// halfPopulation++;
// console.log(halfPopulation);
//
// let finlandPopulation = 6000000;
// console.log(population > finlandPopulation);
//
// let averagePopulation = 33000000;
// console.log(population < averagePopulation);
//
// let description =
//     country +
//     " is in " +
//     continent +
//     ", and its " +
//     population +
//     " people speak " +
//     language;
// console.log(description);
//
// console.log("         ");
//
// // * ===== CHALLENGE #1 =====
//
// console.log("");
// console.log("Challenge #1");
//
// let massMark = 78;
// let heightMark = 1.69;
//
// let massJohn = 92;
// let heightJohn = 1.95;
//
// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / heightJohn ** 2;
//
// let markHigherBMI = BMIMark > BMIJohn;
//
// console.log(markHigherBMI);
//
// massMark = 95;
// heightMark = 1.88;
//
// massJohn = 85;
// heightJohn = 1.76;
//
// BMIMark = Math.floor(((massMark / heightMark ** 2) * 100) / 100);
// BMIJohn = Math.floor(((massJohn / heightJohn ** 2) * 100) / 100);
//
// markHighterBMI = BMIMark > BMIJohn;
//
// console.log(markHighterBMI);
//
// //? DZ 5
//
// console.log("");
// console.log("DZ 5");
//
// description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
// console.log(description);
//
// //? DZ 6
//
// console.log("");
// console.log("DZ 6");
//
// let averageDifference = averagePopulation - population;
//
// if (population > averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(
//         `${country}'s population is ${averageDifference} below average`
//     );
// }
//
// population = 13000000;
//
// averageDifference = averagePopulation - population;
//
// if (population > averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(
//         `${country}'s population is ${averageDifference} below average`
//     );
// }
//
// population = 130000000;
//
// averageDifference = averagePopulation - population;
//
// if (population > averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(
//         `${country}'s population is ${averageDifference} below average`
//     );
// }
//
// // * ===== CHALLENGE #2 =====
//
// console.log("");
// console.log("CHALLENGE 2");
//
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
// } else {
//     console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
// }
//
// // // ? DZ 7
//
// // console.log("");
// // console.log("DZ 7");
//
// // '9' - '5'; // 4
// // '19' - '13' + '17'; // 617
// // '19' - '13' + 17; // 23
// // '123' < 57; // false
// // 5 + 6 + '4' + 9 - 4 - 2; // 1143
//
// //? DZ 8
//
// // console.log("");
// // console.log("DZ 8");
// //
// // let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// //
// // if (numNeighbours === 1) {
// //     console.log("Only 1 border!");
// // } else if (numNeighbours > 1) {
// //     console.log("More than 1 border");
// // } else if (numNeighbours === 0) console.log("No borders");
//
// //? DZ 9
//
// console.log("");
// console.log("DZ 9");
//
// if (language === "English" && (population < 50000000) && isIsland === true) {
//     console.log(`You should live in Ukraine :)`);
// } else {
//     console.log(`Ukraine does not meet your criteria :(`);
// }
//
// // * ===== CHALLENGE #3 =====
//
// console.log("");
// console.log("CHALLENGE 3");
//
// let dolphinsScore1 = 97;
// let dolphinsScore2 = 87;
// let dolphinsScore3 = 81;
//
// let koalasScore1 = 10;
// let koalasScore2 = 9;
// let koalasScore3 = 16;
//
// let averageScoreDolphins = Math.floor((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3);
// let averageScoreKoalas = Math.floor((koalasScore1 + koalasScore2 + koalasScore3) / 3);
//
// if ((averageScoreDolphins > averageScoreKoalas) && (averageScoreDolphins >= 100)) {
//     console.log(`${averageScoreDolphins}, Dolphins win`);
// } else if ((averageScoreDolphins < averageScoreKoalas) && (averageScoreKoalas >= 100)) {
//     console.log(`${averageScoreKoalas}, Koalas win`);
// } else if ((averageScoreDolphins === averageScoreKoalas) && (averageScoreDolphins >= 100) && (averageScoreKoalas >= 100)) {
//     console.log(`${averageScoreDolphins} Dolphins, ${averageScoreKoalas} Koalas, Draw`);
// } else {
//     console.log(`${averageScoreDolphins} Dolphins, ${averageScoreKoalas} Koalas, no one wins`);
// }

// =============== SECTION 2 ================

"use strict";

//? DZ 1

console.log("");
console.log("DZ 1");

// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

function describeCountry(country, population, capitalCity) {
    console.log(
        `${country} has ${population} million people and its capital city is ${capitalCity}`
    );
}

describeCountry("Ukraine", 42, "Kiev");
describeCountry("Finland", 6, "Helsinki");
describeCountry("Georgia", 13, "Tbilisi");

//? DZ 2

console.log("");
console.log("DZ 2");

function percentageOfWorld1(population) {
    return Math.floor((population / 790) * 100);
}

const ukrPopulation = percentageOfWorld1(42);
console.log(ukrPopulation);

let percentageOfWorld2 = function (population) {
    return Math.floor((population / 790) * 100);
};

const ukrPopulation2 = percentageOfWorld2(42);
console.log(ukrPopulation2);

//? DZ 3

console.log("");
console.log("DZ 3");

const percentageOfWorld3 = (population) => Math.floor((population / 790) * 100);

const ukrPopulation3 = percentageOfWorld3(42);
console.log(ukrPopulation3);

//? DZ 4

console.log("");
console.log("DZ 4");

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

const ch = describePopulation("Ukraine", 42);
console.log(ch);

// * ===== CHALLENGE #1 =====

console.log("");
console.log("CHALLENGE 1");

const dolphinsScore1 = 44;
const dolphinsScore2 = 23;
const dolphinsScore3 = 71;

const koalasScore1 = 65;
const koalasScore2 = 54;
const koalasScore3 = 49;

// const dolphinsScore1 = 85;
// const dolphinsScore2 = 54;
// const dolphinsScore3 = 41;

// const koalasScore1 = 23;
// const koalasScore2 = 34;
// const koalasScore3 = 27;

const calcAverage = (score1, score2, score3) =>
    Math.floor((score1 + score2 + score3) / 3);

const avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

console.log(avgDolphins);
console.log(avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolhins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else console.log(`No one wins`);
}

checkWinner(avgDolphins, avgKoalas);

//? DZ 5

console.log("");
console.log("DZ 5");

const population1 = 44;
const population2 = 32;
const population3 = 15;
const population4 = 5;

const populations = [population1, population2, population3, population4];

const testEmptyArray = [];

function defineElem(params) {
    if (params.length != 0) {
        console.log(`Array has elements`);
    } else console.log(`Empty Array`);
}

defineElem(populations);
defineElem(testEmptyArray);

const percentages = [
    percentageOfWorld1(population1),
    percentageOfWorld1(population2),
    percentageOfWorld1(population3),
    percentageOfWorld1(population4),
];

console.log(percentages);

//? DZ 6

console.log("");
console.log("DZ 6");

const neighbours = ["Germany", "France", "Italy"];

console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany") != true) {
    console.log("Probably not a central European country :D");
} else console.log("A central European country!");

neighbours.indexOf("France");
console.log(neighbours.indexOf("France"));

neighbours[1] = "French Republic";

console.log(neighbours);



// * ===== CHALLENGE #2 =====

console.log("");
console.log("CHALLENGE 2");

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(44));

const bills = [125, 555, 44];

console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);



//? DZ 7

console.log("");
console.log("DZ 7");

const myCountry = {
    country: "Ukraine",
    capital: "Kiev",
    language: "Ukrainian",
    population: 42,
    neighbours: ["German", "France", "UK"],

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function() {
        // this.isIsland = !Boolean(this.neighbours.length);
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

console.log(myCountry);


//? DZ 8

console.log("");
console.log("DZ 8");

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


//? DZ 9

console.log("");
console.log("DZ 9");

myCountry.describe();
myCountry.checkIsland();


// * ===== CHALLENGE #3 =====

console.log("");
console.log("CHALLENGE 3");


const markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.index = Math.floor(this.mass / (this.height ** 2));
        return this.index;
    }
}

const johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.index = Math.floor(this.mass / (this.height ** 2));
        return this.index;
    }
}

markMiller.calcBMI();
johnSmith.calcBMI();

if (markMiller.index > johnSmith.index) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.index}) is higher than ${johnSmith.fullName}'s (${johnSmith.index})!`);
} else {
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.index}) is higher than ${markMiller.fullName}'s (${markMiller.index})!`);
}



//? DZ 10

console.log("");
console.log("DZ 10");

for (let i = 1; i <= 10; i++) {
    console.log(`Voter number ${i} is currently voting`);
}


//? DZ 11

console.log("");
console.log("DZ 11");

for (let i = 0; i < populations.length; i++) {
    const percentages2 = Math.floor(percentageOfWorld1(populations[i]));
    console.log(percentages2);
}



//? DZ 12

console.log("");
console.log("DZ 12");


const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
console.log(listOfNeighbours[0]);

for (let i = 0; i < listOfNeighbours.length; i++) {
    console.log(`Neighbours ${i+1}`);
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}


//? DZ 13

console.log("");
console.log("DZ 13");

let i = 0;

while (i < populations.length) {
    const percentages3 = Math.floor(percentageOfWorld1(populations[i]));
    console.log(percentages3);
    i++;
}


// * ===== CHALLENGE #4 =====

console.log("");
console.log("CHALLENGE 4");


const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips2 = [];
const totals2 = [];

function calcTip2(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip(bills2[i]));
    totals2.push(tips2[i] + bills2[i]);
    console.log(totals2[i]);
}   

console.log("BONUS!!!");

const arr = [1, 4, 6];

function calcAverage2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum = Math.floor(sum / arr.length);
    console.log(sum);
}

calcAverage2(totals2);