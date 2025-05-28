/*###################################################
# CommonJS Importing
###################################################*/
// const { generateRandomNumber, celsiusToFahrenheit } = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`===========================================`);

// Celsius To Fahrenheit
// const readline = require('readline');

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// rl.question('Enter a celsius number: \n', (number) => {
//     console.log(`Fahrenheit is: ${celsiusToFahrenheit(number)}`);
//     rl.close();
// });

/*###################################################
# ESModule Importing
###################################################*/

// Importing as default + Importing non-default function
import getPosts, { getPostsLength } from './postController.js';

// Importing as default
console.log(getPosts());

// Importing non-default function
console.log(getPostsLength());

