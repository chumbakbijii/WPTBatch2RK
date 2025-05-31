// 3_file_read.js - Task 3: Create dummy file and read data from it

const fs = require('fs').promises;

/**
 * Create a dummy file with sample data and then read from it
 */
const readDataFromFile = async () => {
    try {
        console.log("=== Task 3: Reading Data from File ===");

        // Step 1: Create dummy file with sample data
        const dummyData = `Hello World!
This is a sample file created for demonstration.
It contains multiple lines of text.
Line 4: Some numbers - 123, 456, 789
Line 5: Current date - ${new Date().toLocaleString()}
Line 6: This is the last line of dummy data.`;

        await fs.writeFile('dummy_data.txt', dummyData);
        console.log("✅ Created dummy_data.txt with sample content");

        // Step 2: Read the file
        const data = await fs.readFile('dummy_data.txt', 'utf8');

        console.log("\n📖 Content read from dummy_data.txt:");
        console.log("-".repeat(40));
        console.log(data);
        console.log("-".repeat(40));

        // Additional info about the file
        const stats = await fs.stat('dummy_data.txt');
        console.log(`\n📊 File info:`);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created: ${stats.birthtime.toLocaleString()}`);
        console.log(`Modified: ${stats.mtime.toLocaleString()}`);

        return data;

    } catch (error) {
        console.error("❌ Error in readDataFromFile:", error.message);
    }
};

// Export function
module.exports = { readDataFromFile };

// Run if this file is executed directly
if (require.main === module) {
    readDataFromFile();
}