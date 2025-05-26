// main.js - Main module that uses greeting module
const greeting = require('./greeting');

console.log("=== Greeting Module Demo ===");
const greetingMessage = greeting.greet();
console.log(greetingMessage);

// Test at different times (simulation)
console.log("\nTesting different times:");
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
global.Date = originalDate;