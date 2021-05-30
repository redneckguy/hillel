// DZ 1
const country = "Ukraine";
const continent = "Europe";
let population = 42000000;

// console.log(country, continent, population);

// DZ 2
const isIsland = false;
let language;

// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof isIsland);
// console.log(typeof language);

//DZ 3
language = "Ukrainian";

// console.log(country, continent, population);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof isIsland);
// console.log(typeof language);

//DZ 4
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

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

markHighterBMI = BMIMark > BMIJohn;

console.log(markHighterBMI);

