// 2_table.js - Task 2: Write table of 3 to file

const fs = require('fs').promises;

/**
 * Generate multiplication table of 3 and write to file
 */
const writeTableOfThree = async () => {
    try {
        console.log("=== Task 2: Table of 3 ===");

        const table = [];

        // Generate table of 3 (1 to 10)
        for (let i = 1; i <= 10; i++) {
            table.push(`3 x ${i} = ${3 * i}`);
        }

        const tableContent = table.join('\n');
        console.log("Table of 3:");
        console.log(tableContent);

        // Write to file using async fs
        const fileContent = `Multiplication Table of 3:\n\n${tableContent}\n\nGenerated on: ${new Date().toLocaleString()}`;
        await fs.writeFile('table_of_3.txt', fileContent);

        console.log("✅ Table of 3 written to table_of_3.txt");
        return table;

    } catch (error) {
        console.error("❌ Error in writeTableOfThree:", error.message);
    }
};

// Export function
module.exports = { writeTableOfThree };

// Run if this file is executed directly
if (require.main === module) {
    writeTableOfThree();
}