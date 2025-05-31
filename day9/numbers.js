// 4_numbers.js - Task 4: Read numbers from file, perform addition, write to another file

const fs = require('fs').promises;

/**
 * Create file with comma-separated numbers, read them, calculate sum, write result to another file
 */
const processNumbersFromFile = async () => {
    try {
        console.log("=== Task 4: Process Numbers from File ===");

        // Step 1: Create file with comma-separated numbers
        const numbers = "10, 25, 30, 45, 50, 15, 20, 35, 40, 55, 60, 75, 80, 95, 100";
        await fs.writeFile('numbers.txt', numbers);
        console.log("✅ Created numbers.txt with:", numbers);

        // Step 2: Read numbers from file
        const data = await fs.readFile('numbers.txt', 'utf8');
        console.log("\n📖 Raw data read from file:", data);

        // Step 3: Parse numbers (handle spaces and convert to integers)
        const numberArray = data.split(',').map(num => parseInt(num.trim()));
        console.log("🔢 Parsed numbers:", numberArray);

        // Step 4: Perform addition
        const sum = numberArray.reduce((accumulator, currentNumber) => {
            return accumulator + currentNumber;
        }, 0);

        console.log("➕ Sum of all numbers:", sum);
        console.log("📊 Count of numbers:", numberArray.length);
        console.log("📈 Average:", (sum / numberArray.length).toFixed(2));

        // Step 5: Write result to another file
        const result = `CALCULATION RESULTS
${"=".repeat(30)}

Original Numbers: ${numberArray.join(', ')}

Calculations:
- Sum: ${sum}
- Count: ${numberArray.length}
- Average: ${(sum / numberArray.length).toFixed(2)}
- Maximum: ${Math.max(...numberArray)}
- Minimum: ${Math.min(...numberArray)}

Calculated on: ${new Date().toLocaleString()}
Source file: numbers.txt`;

        await fs.writeFile('sum_result.txt', result);
        console.log("✅ Results written to sum_result.txt");

        // Step 6: Verify by reading the result file
        const resultData = await fs.readFile('sum_result.txt', 'utf8');
        console.log("\n📋 Content of sum_result.txt:");
        console.log("-".repeat(40));
        console.log(resultData);
        console.log("-".repeat(40));

        return {
            numbers: numberArray,
            sum: sum,
            average: (sum / numberArray.length).toFixed(2)
        };

    } catch (error) {
        console.error("❌ Error in processNumbersFromFile:", error.message);
    }
};

// Export function
module.exports = { processNumbersFromFile };

// Run if this file is executed directly
if (require.main === module) {
    processNumbersFromFile();
}