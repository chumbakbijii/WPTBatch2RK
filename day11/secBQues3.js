// Section C - Question 2: Express Server with Arithmetic HTML Files
// File: sectionC_q2_server.js

const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Routes for arithmetic operations
app.get('/addition', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'addition.html'));
});

app.get('/subtraction', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'subtraction.html'));
});

app.get('/multiplication', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'multiplication.html'));
});

app.get('/division', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'division.html'));
});

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Arithmetic Calculator</h1>
        <ul>
            <li><a href="/addition">Addition</a></li>
            <li><a href="/subtraction">Subtraction</a></li>
            <li><a href="/multiplication">Multiplication</a></li>
            <li><a href="/division">Division</a></li>
        </ul>
    `);
});

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log('- http://localhost:4001/addition');
    console.log('- http://localhost:4001/subtraction');
    console.log('- http://localhost:4001/multiplication');
    console.log('- http://localhost:4001/division');
});

// To run:
// 1. Create a 'public' folder
// 2. Put all HTML files in the 'public' folder
// 3. npm install express
// 4. node sectionC_q2_server.js