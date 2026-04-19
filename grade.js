const prompt = require('prompt-sync')();

let score = Number(prompt("Enter  your grade score: "));
let grade;
let result;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score <= 89):
        grade = "B";
        break;
    case (score >= 70 && score <= 79):
        grade = "C";
        break;
    case (score >= 60 && score <= 69):
        grade = "D";
        break;
    case (score < 60 && score >= 0):
        grade = "F";
        break;
    default:
        grade="Inappropiate grade";
}


result = (score >= 60) ? "Passed" : "Failed";

console.log(`${result} with grade ${grade}`);
