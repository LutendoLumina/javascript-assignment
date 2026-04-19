# JavaScript Practice Questions

This project contains solutions for JavaScript practice questions covering:

* Functions & Logical Operators
* Objects & Methods
* Loops
* Spread Operator
* Pattern Printing
* While Loops
* Truthy and Falsy Values
* Type Conversion

---

# Input in Terminal (Like Scanner in Java)

JavaScript does not have a built-in `Scanner` class like Java.

To take user input from the terminal, we use a library called **prompt-sync**.

Example in Java:

```java
Scanner sc = new Scanner(System.in);
int num = sc.nextInt();
```

Equivalent in JavaScript:

```javascript
const prompt = require('prompt-sync')();
let num = prompt("Enter a number: ");
```

---

# Install prompt-sync

Before running programs that need terminal input, install the library using:

```bash
npm install prompt-sync
```

This will create:

* `node_modules/`
* `package-lock.json`
* `package.json`

### Important for GitHub

Add this to `.gitignore`:

```gitignore
node_modules/
```

Do **not** ignore:

* `package.json`
* `package-lock.json`

because they help others install the same dependencies.

---

# How to Run the Program

Open terminal in your project folder and run:

```bash
node filename.js
```

Example:

```bash
node app.js
```

---

# Example prompt-sync Program

```javascript
const prompt = require('prompt-sync')();

let name = prompt("Enter your name: ");
console.log(`Hello, ${name}`);
```

---

# Notes

* Use `Number()` or `parseInt()` when converting input into numbers.
* `prompt()` returns input as a string by default.
* For conditions involving ranges (like grades), `if...else` or `switch(true)` can be used.

---

# Author

Lutendo Matshidze
