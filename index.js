// Single line comment


/*

---------- Multiline comment

Escaping in HTML
< -> &lt;
> -> &gt;
& -> &amp;

Escaping special characters with \

' - single quotes
" - double quotes
` - backticks

New line characters
\n
\r\n

*/

// Define some variables
// Old way, avoid if possible
var myFirstVariable = ''; // empty string

// New ways to define variables
const mySecondVariable = '';
let myThirdVariable = '-';

console.log(myThirdVariable);

myThirdVariable = 'hello stranger!';

let myFourthVariable;
myFourthVariable = 'Let\'s assign \nsome value.';

// var will be used if no keyword is specified
// myFifthVariable = '5th';
let myFifthVariable = '5th';

let mySixthVariable = `
    Some text in the quotes
    Some text in the quotes
    Some text in the quotes
`;

console.log(myThirdVariable);
console.log(myFourthVariable);
// Log multiple values
console.log(myThirdVariable, myFourthVariable, myFifthVariable, mySixthVariable);

// Combine strings into one
let name = 'Jane';
let greeting = 'Good morning';

// Operators: +, -, *, /
console.log(greeting + ' ' + name + '! Happy to see you.'); // string concatination

console.log(`${greeting.toUpperCase()} ${name.toLowerCase()}! Happy to see you.`); // template literals

name = 'Joe';
greeting = 'Good evening';

console.log(`${greeting.toUpperCase()} ${name}! Happy to see you.`); // template literals

name = 'Nora';
greeting = 'Hi';

console.log(`${greeting.toUpperCase()} ${name}! Happy to see you.`); // template literals

// Asign a number to the name variable
name = 1234678;
greeting = 'Hello';

console.log(`${greeting.toUpperCase()} ${name}! Happy to see you.`); // template literals

let theAnswerToEverything = 42; // use camelCase
// let the_answer_to_everything = 42; // or use snake_case, but stick to one of them
console.log(theAnswerToEverything);

// console.log(greeting + ' ' + name + '! Happy to see you. The answer to everything is ' + theAnswerToEverything); // string concatination

console.log(`${greeting.toUpperCase()} ${name}! Happy to see you. The answer to everything is ${theAnswerToEverything}`); // template literals

console.log(theAnswerToEverything / 2);
console.log(theAnswerToEverything * 6);
