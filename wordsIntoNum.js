const prompt = require("prompt-sync")();

let words = prompt("Enter your string: ");

let num = Number(words);

console.log(`String input: "${words}"`);
console.log(`Converted to number: ${num}`);

console.log();

let values = [0, "", "hello", null, undefined, NaN];

for (let value of values) {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
}
