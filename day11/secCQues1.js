// Section C - Question 1: Express Server with Text Responses
// File: sectionC_q1_server.js

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

// Default route for undefined paths
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log('- http://localhost:4000/data');
    console.log('- http://localhost:4000/profile');
});

// To run: 
// 1. npm init -y
// 2. npm install express
// 3. node sectionC_q1_server.js