// DAY11/sectionC_q4_register_server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Serve registration page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

// Handle registration form submission
app.post('/register', (req, res) => {
    const { name, dob, phone, email, gender, languages, state } = req.body;

    // Log the received data to console
    console.log('Registration Data Received:');
    console.log('Name:', name);
    console.log('Date of Birth:', dob);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Languages:', languages);
    console.log('State:', state);
    console.log('----------------------------');

    // Send response back to user
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Registration Successful</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 600px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f9f9f9;
                }
                .success-container {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(0,0,0,0.1);
                    text-align: center;
                }
                .success-message {
                    font-size: 24px;
                    font-weight: bold;
                    color: #28a745;
                    margin: 20px 0;
                }
                .checkmark {
                    font-size: 48px;
                    color: #28a745;
                    margin: 20px 0;
                }
                a {
                    display: inline-block;
                    margin: 20px 10px;
                    padding: 12px 25px;
                    background: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                }
                a:hover {
                    background: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="success-container">
                <div class="checkmark">✓</div>
                <h1>Registration Successful!</h1>
                <div class="success-message">Got data</div>
                <p>Your registration has been processed successfully.</p>
                <p>Thank you for registering with us!</p>
                <a href="/register">Register Another User</a>
            </div>
        </body>
        </html>
    `);
});

const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Registration server running on http://localhost:${PORT}`);
    console.log('Make sure register.html is in the same directory!');
    console.log('Visit: http://localhost:3005/register');
});

// IMPORTANT: Before running this file, make sure to:
// 1. Install Express: npm install express
// 2. Make sure register.html is in the same directory as this JS file
// To run: node DAY11/sectionC_q4_register_server.js