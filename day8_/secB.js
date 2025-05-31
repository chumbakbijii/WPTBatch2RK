// Section B - Node.js Questions
const fs = require('fs');
const path = require('path');

console.log("=== Section B - Node.js File Operations ===\n");

// Question 1: Fibonacci numbers till 100
console.log("1. Fibonacci numbers till 100:");
function fibonacci() {
    let a = 0, b = 1;
    const fibNumbers = [];

    while (a <= 100) {
        fibNumbers.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    return fibNumbers;
}

const fibResult = fibonacci();
console.log(fibResult.join(', '));
console.log("\n" + "=".repeat(50) + "\n");

// Question 2: Write table of 3 to file
console.log("2. Writing table of 3 to file:");
function writeTableToFile() {
    let tableContent = "Table of 3:\n";
    for (let i = 1; i <= 10; i++) {
        tableContent += `3 × ${i} = ${3 * i}\n`;
    }

    fs.writeFileSync('table_of_3.txt', tableContent);
    console.log("Table of 3 written to 'table_of_3.txt'");
}

writeTableToFile();
console.log("\n" + "=".repeat(50) + "\n");

// Question 3: Read data from file (create dummy file first)
console.log("3. Reading data from file:");
function createAndReadFile() {
    // Create a dummy file with some data
    const dummyData = "This is a sample text file.\nIt contains multiple lines.\nCreated for demonstration purposes.\nNode.js file operations are powerful!";
    fs.writeFileSync('dummy_data.txt', dummyData);
    console.log("Created dummy file 'dummy_data.txt'");

    // Read the data from file
    const readData = fs.readFileSync('dummy_data.txt', 'utf8');
    console.log("Data read from file:");
    console.log(readData);
}

createAndReadFile();
console.log("\n" + "=".repeat(50) + "\n");

// Question 4: Read numbers from file, perform addition, write to another file
console.log("4. Reading numbers, performing addition, writing result:");
function processNumbers() {
    // Create first file with comma-separated numbers
    const numbers = "10,25,30,45,15,20,35,40,5,55";
    fs.writeFileSync('numbers.txt', numbers);
    console.log("Created 'numbers.txt' with numbers:", numbers);

    // Read numbers from file
    const fileContent = fs.readFileSync('numbers.txt', 'utf8');
    const numberArray = fileContent.split(',').map(num => parseInt(num.trim()));

    // Perform addition
    const sum = numberArray.reduce((acc, num) => acc + num, 0);

    // Write result to another file
    const resultContent = `Numbers: ${numberArray.join(', ')}\nSum: ${sum}\nTotal count: ${numberArray.length}`;
    fs.writeFileSync('sum_result.txt', resultContent);

    console.log("Sum of numbers:", sum);
    console.log("Result written to 'sum_result.txt'");
}

processNumbers();
console.log("\n" + "=".repeat(50) + "\n");

// Question 5: Create greeting module and main module
console.log("5. Creating greeting module and main module:");

// First, create the greeting.js module
const greetingModuleContent = `// greeting.js - User defined local module
function greet() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        return "Good morning";
    } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

module.exports = { greet };`;

fs.writeFileSync('greeting.js', greetingModuleContent);
console.log("Created 'greeting.js' module");

// Create the main module
const mainModuleContent = `// main.js - Main module that uses greeting module
const greeting = require('./greeting');

console.log("=== Greeting Module Demo ===");
const greetingMessage = greeting.greet();
console.log(greetingMessage);

// Test at different times (simulation)
console.log("\\nTesting different times:");
const originalDate = Date;
global.Date = class extends Date {
    constructor(...args) {
        if (args.length === 0) {
            super();
            this.setHours(9); // Morning
        } else {
            super(...args);
        }
    }
    getHours() {
        return 9; // Simulate morning
    }
};
console.log("Morning (9 AM):", greeting.greet());

global.Date = class extends originalDate {
    getHours() {
        return 14; // Simulate afternoon
    }
};
console.log("Afternoon (2 PM):", greeting.greet());

global.Date = class extends originalDate {
    getHours() {
        return 20; // Simulate evening
    }
};
console.log("Evening (8 PM):", greeting.greet());

// Restore original Date
global.Date = originalDate;`;

fs.writeFileSync('main.js', mainModuleContent);
console.log("Created 'main.js' module");

// Load and execute the greeting module
const greetingModule = require('./greeting');
console.log("Current greeting:", greetingModule.greet());

console.log("\nAll files created successfully!");
console.log("Files created:");
console.log("- table_of_3.txt");
console.log("- dummy_data.txt");
console.log("- numbers.txt");
console.log("- sum_result.txt");
console.log("- greeting.js");
console.log("- main.js");

console.log("\nTo test the greeting module, run: node main.js");