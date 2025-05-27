// 1_fibonacci.js - Task 1: Generate Fibonacci numbers till 100

const fs = require('fs').promises;

/**
 * Generate Fibonacci numbers up to 100 and write to file
 */
const generateFibonacci = async () => {
    try {
        console.log("=== Task 1: Fibonacci Numbers till 100 ===");

        const fibonacci = [];
        let a = 0, b = 1;

        // Generate Fibonacci sequence till 100
        while (a <= 100) {
            fibonacci.push(a);
            [a, b] = [b, a + b]; // Swap values using destructuring
        }

        console.log("Fibonacci numbers till 100:");
        console.log(fibonacci.join(', '));

        // Write to file using async fs
        const content = `Fibonacci Numbers till 100:\n${fibonacci.join(', ')}\n\nGenerated on: ${new Date().toLocaleString()}`;
        await fs.writeFile('fibonacci.txt', content);

        console.log("✅ Fibonacci numbers written to fibonacci.txt");
        return fibonacci;

    } catch (error) {
        console.error("❌ Error in generateFibonacci:", error.message);
    }
};

// Export function
module.exports = { generateFibonacci };

// Run if this file is executed directly
if (require.main === module) {
    generateFibonacci();
}