// DAY11/sectionC_q1_express_basic.js
const express = require('express');
const app = express();

// Route for /data
app.get('/data', (req, res) => {
    res.send('this is data');
});

// Route for /profile
app.get('/profile', (req, res) => {
    res.send('this is profile');
});

// Default route
app.get('/', (req, res) => {
    res.send(`
        <h1>Express Server - Section C Question 1</h1>
        <p><a href="/data">Go to Data</a></p>
        <p><a href="/profile">Go to Profile</a></p>
    `);
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
    console.log('Visit:');
    console.log('- http://localhost:3002/data');
    console.log('- http://localhost:3002/profile');
});

// IMPORTANT: Before running this file, make sure to install Express:
// Run this command in your DAY11 folder: npm install express
// To run: node DAY11/sectionC_q1_express_basic.js