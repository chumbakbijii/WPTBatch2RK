// main.js - Main application that brings everything together

const readline = require('readline');
const fs = require('fs').promises;

// Import all our modules
const { generateFibonacci } = require('./fibonacci');
const { writeTableOfThree } = require('./table');
const { readDataFromFile } = require('./file_read');
const { processNumbersFromFile } = require('./numbers');
const { useGreetingModule } = require('./_greeting_demo');

/**
 * Function to get user input using readline
 */
const getUserInput = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

/**
 * Display a nice menu for the user
 */
const displayMenu = () => {
    console.log("\n" + "=".repeat(60));
    console.log("         NODE.JS ASSIGNMENT - SECTION A");
    console.log("=".repeat(60));
    console.log("1. Generate Fibonacci numbers till 100");
    console.log("2. Create multiplication table of 3");
    console.log("3. Create and read dummy file");
    console.log("4. Process numbers from file (addition)");
    console.log("5. Use greeting module with async/await");
    console.log("6. Run all tasks");
    console.log("7. Show created files");
    console.log("0. Exit");
    console.log("=".repeat(60));
};

/**
 * Show all files created during execution
 */
const showCreatedFiles = async () => {
    try {
        console.log("\n📁 Files created during execution:");
        console.log("-".repeat(40));

        const expectedFiles = [
            'fibonacci.txt',
            'table_of_3.txt',
            'dummy_data.txt',
            'numbers.txt',
            'sum_result.txt'
        ];

        for (const fileName of expectedFiles) {
            try {
                // Use __dirname to get the absolute path
                const filePath = require('path').join(__dirname, fileName);
                const stats = await fs.stat(filePath);
                console.log(`✅ ${fileName} (${stats.size} bytes) - ${stats.mtime.toLocaleString()}`);
            } catch (error) {
                console.log(`❌ ${fileName} - Not found`);
            }
        }
        console.log("-".repeat(40));

    } catch (error) {
        console.error("Error checking files:", error.message);
    }
};

/**
 * Run all tasks in sequence
 */
const runAllTasks = async (userName) => {
    console.log(`\n🚀 Running all tasks for ${userName}...\n`);

    try {
        await generateFibonacci();
        console.log("\n" + "-".repeat(50) + "\n");

        await writeTableOfThree();
        console.log("\n" + "-".repeat(50) + "\n");

        await readDataFromFile();
        console.log("\n" + "-".repeat(50) + "\n");

        await processNumbersFromFile();
        console.log("\n" + "-".repeat(50) + "\n");

        await useGreetingModule();
        console.log("\n" + "-".repeat(50) + "\n");

        console.log("🎉 ALL TASKS COMPLETED SUCCESSFULLY!");

    } catch (error) {
        console.error("❌ Error running tasks:", error.message);
    }
};

/**
 * Main application function
 */
const main = async () => {
    try {
        // Get user name
        const userName = await getUserInput("👋 Enter your name: ");
        console.log(`\nHello ${userName}! Welcome to the Node.js Assignment Demo.`);

        // Use greeting module first
        await useGreetingModule();

        let choice;
        do {
            displayMenu();
            choice = await getUserInput("\n🔹 Enter your choice (0-7): ");

            switch(choice) {
                case '1':
                    await generateFibonacci();
                    break;

                case '2':
                    await writeTableOfThree();
                    break;

                case '3':
                    await readDataFromFile();
                    break;

                case '4':
                    await processNumbersFromFile();
                    break;

                case '5':
                    await useGreetingModule();
                    break;

                case '6':
                    await runAllTasks(userName);
                    break;

                case '7':
                    await showCreatedFiles();
                    break;

                case '0':
                    console.log(`\n👋 Goodbye ${userName}! Thanks for using our application.`);
                    break;

                default:
                    console.log("❌ Invalid choice. Please enter a number between 0-7.");
            }

            if (choice !== '0') {
                await getUserInput("\n⏸️  Press Enter to continue...");
            }

        } while (choice !== '0');

    } catch (error) {
        console.error("❌ Error in main application:", error.message);
    }
};

// Run the application
if (require.main === module) {
    console.log("🌟 Starting Node.js Assignment Application...");
    main().then(() => {
        console.log("✅ Application finished.");
        process.exit(0);
    }).catch((error) => {
        console.error("💥 Application crashed:", error.message);
        process.exit(1);
    });
}

// Export for testing
module.exports = {
    getUserInput,
    runAllTasks,
    showCreatedFiles
};