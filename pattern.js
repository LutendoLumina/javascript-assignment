// PROBLEM 1: COMBINE TWO ARRAYS

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined);

console.log();

// PROBLEM 2: CREATE PATTERN

let rows = 5;
let pattern = "";

//  outer loop for 'rows' no. of times
for (let i = 1; i <= rows; i++) {
  // Inner loop no.1 for spaces before stars
  for (let j = 1; j <= rows - i; j++) {
    pattern += "  ";
  }

  // Inner loop no.2 for * with spaces between
  for (let num = 1; num <= i; num++) {
    pattern += "*  ";
  }

  pattern += "\n";
}

console.log(pattern);

console.log();

// PROBLEM 3: WHILE LOOP

let num = 10;

while (num >= 1) {
  console.log(num);
  num--;
}
