// greeting.js - User defined local module
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

module.exports = { greet };