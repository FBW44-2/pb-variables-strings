// Single line comment


/*

---------- Multiline comment

Escaping in HTML, you remember right?
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
var myFirstVariable = ''; // empty string, its length will be 0

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

// The backticks will save the indentation
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

// Reassign the variable, give it a new value
name = 'Joe';
greeting = 'Good evening';

console.log(`${greeting.toUpperCase()} ${name}! Happy to see you.`); // template literals

// Reassign the variable, give it a new value
name = 'Nora';
greeting = 'Hi';

console.log(`${greeting.toUpperCase()} ${name}! Happy to see you.`); // template literals

// Reassign the variable, give it a new value
// This time the value is a number, and not a string like before
name = 1234678; // the variable name can contain any type: string or number, it does not matter to the variable, but it matters to us, we might run into various issues, we will see more in the future
greeting = 'Hello';

console.log(`${greeting.toUpperCase()} ${name}! Happy to see you.`); // template literals

let theAnswerToEverything = 42; // use camelCase for the variable name
// let the_answer_to_everything = 42; // or use snake_case, but stick to one of them
console.log(theAnswerToEverything);

// console.log(greeting + ' ' + name + '! Happy to see you. The answer to everything is ' + theAnswerToEverything); // string concatination using the + operator

console.log(`${greeting.toUpperCase()} ${name}! Happy to see you. The answer to everything is ${theAnswerToEverything}`); // template literals

// The theAnswerToEverything variable contains a nunber and we can perform math operations with other numbers
console.log(theAnswerToEverything / 2);
console.log(theAnswerToEverything * 6);
