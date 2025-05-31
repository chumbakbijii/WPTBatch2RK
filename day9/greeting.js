// greeting.js - User defined local module

/**
 * Async function that greets user based on current time
 * Morning (5-12): Good Morning
 * Afternoon (12-17): Good Afternoon
 * Evening/Night: Good Evening
 */
const greet = async () => {
    return new Promise((resolve) => {
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour >= 5 && currentHour < 12) {
            greeting = "Good Morning";
        } else if (currentHour >= 12 && currentHour < 17) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }

        // Simulate async operation with setTimeout
        setTimeout(() => {
            resolve(greeting);
        }, 100);
    });
};

// Export the greet function
module.exports = { greet };