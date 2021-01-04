// toUpperCase(), toLowerCase()

// trim()

// length

// repeat()

// 'some string'[0] - get 1st character of string
// the last character will be the size of the string minus 1
// to get the size of the string, use the length property
// let indexNumber = 2;
// sampleText[indexNumber + 1]

let sampleText = 'Hello world    ';

// clean up empty space at the end of the string and save the result into a variable
let trimmedSampleText = sampleText.trim();

// The length of the 2 strings will be different
console.log(sampleText.length, trimmedSampleText.length);

// We could repeat the character by copy paste
console.log(`${sampleText[6]}${sampleText[6]}${sampleText[6]}`); // www
// Or we could make use of the repeat method
console.log(sampleText[6].repeat(3)); // w

// Subtract 1 from the total size of the string to get the last character of the string

console.log(sampleText[sampleText.length - 1]); // get the last character: it will be an empty space
console.log(trimmedSampleText[trimmedSampleText.length - 1]); // get the last character: it will be the letter d