// DAY11/sectionC_q2_express_arithmetic.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static HTML files from the current directory
app.use(express.static(__dirname));

// Routes for arithmetic operations
app.get('/addition', (req, res) => {
    res.sendFile(path.join(__dirname, 'addition.html'));
});

app.get('/subtraction', (req, res) => {
    res.sendFile(path.join(__dirname, 'subtraction.html'));
});

app.get('/multiplication', (req, res) => {
    res.sendFile(path.join(__dirname, 'multiplication.html'));
});

app.get('/division', (req, res) => {
    res.sendFile(path.join(__dirname, 'division.html'));
});

// Home route with navigation
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Express Arithmetic Calculator</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
                .nav-container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 15px rgba(0,0,0,0.1); text-align: center; }
                .nav-links a { display: inline-block; margin: 10px; padding: 15px 25px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; }
                .nav-links a:hover { background: #0056b3; }
            </style>
        </head>
        <body>
            <div class="nav-container">
                <h1>Express Arithmetic Calculator</h1>
                <div class="nav-links">
                    <a href="/addition">Addition</a>
                    <a href="/subtraction">Subtraction</a>
                    <a href="/multiplication">Multiplication</a>
                    <a href="/division">Division</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Express arithmetic server running on http://localhost:${PORT}`);
    console.log('Make sure all HTML files (addition.html, subtraction.html, multiplication.html, division.html) are in the same directory!');
    console.log('Visit:');
    console.log('- http://localhost:3003/addition');
    console.log('- http://localhost:3003/subtraction');
    console.log('- http://localhost:3003/multiplication');
    console.log('- http://localhost:3003/division');
});

// IMPORTANT: Before running this file, make sure to:
// 1. Install Express: npm install express
// 2. Make sure all HTML files are in the same directory as this JS file
// To run: node DAY11/sectionC_q2_express_arithmetic.js