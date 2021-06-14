// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [17, 21, 23];
const day2Tempr = [12, 5, -5, 0, 4];

function printForecast(array) {
    let str = "...";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        str += `${array[i]}°C in ${i + 1} days...`;
    }
    console.log(str);
}

printForecast(temperatures);
console.log(`   `);
printForecast(day2Tempr);
