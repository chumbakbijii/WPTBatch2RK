// 5_greeting_demo.js - Task 5: Demo of greeting module with async/await

const { greet } = require('./greeting'); // Import our custom module

/**
 * Demonstrate the greeting module with async/await
 */
const useGreetingModule = async () => {
    try {
        console.log("=== Task 5: Using Greeting Module ===");

        console.log("⏰ Current time:", new Date().toLocaleString());
        console.log("🔄 Calling async greet function...");

        // Use await to call the async greet function
        const greetingMessage = await greet();

        console.log(`🎉 ${greetingMessage}! Welcome to our Node.js application.`);
        console.log("✅ Greeting module executed successfully with async/await");

        // Demonstrate multiple calls
        console.log("\n🔄 Making multiple async calls...");
        const promises = [];
        for (let i = 1; i <= 3; i++) {
            promises.push(greet());
        }

        const results = await Promise.all(promises);
        results.forEach((result, index) => {
            console.log(`Call ${index + 1}: ${result}`);
        });

        return greetingMessage;

    } catch (error) {
        console.error("❌ Error in useGreetingModule:", error.message);
    }
};

// Export function
module.exports = { useGreetingModule };

// Run if this file is executed directly
if (require.main === module) {
    useGreetingModule();
}