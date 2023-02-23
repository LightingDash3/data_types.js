let pi = 3.14159
let amount = 25.3333333

console.log(pi.toFixed(3))
console.log(parseFloat(amount.toFixed(3)) + 10.50)
console.log(parseInt(pi))

console.log(Number.isInteger(pi))

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

function truncate(fullString, maxChars) {
    //return a truncated version of fullString that is maxChars characters long
}