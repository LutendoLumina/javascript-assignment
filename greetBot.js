function greetingBot (name, isMorning) {
    if (isMorning === true) {
        return `Good morning ${name}!`
    }
    else {
        return `Hello, ${name}!`
    }
}

let greet1 = greetingBot('Lumina', false);
let greet2 = greetingBot('Joe', true);
let greet3 = greetingBot('Zara', false);
let greet4 = greetingBot('Keisha', true);

console.log(greet1);
console.log(greet2);
console.log(greet3);
console.log(greet4);