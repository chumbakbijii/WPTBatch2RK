// Section C - Question 4: Registration Form Server
// File: sectionC_q4_server.js

const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public')); // Remove or comment out this line

// Serve registration page
app.get('/register', (req, res) => {
    // Point directly to register.html in the same directory
    res.sendFile(path.join(__dirname, 'register.html'));
});

// Handle registration form submission
app.post('/register', (req, res) => {
    const { name, dob, phone, email, gender, languages, state } = req.body;

    // Log received data to console (for debugging)
    console.log('Registration Data Received:');
    console.log('Name:', name);
    console.log('Date of Birth:', dob);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Languages:', languages);
    console.log('State:', state);
    console.log('------------------------');

    // Process languages (can be array if multiple selected)
    let languageList = '';
    if (languages) {
        if (Array.isArray(languages)) {
            languageList = languages.join(', ');
        } else {
            languageList = languages;
        }
    }

    // Send response with received data
    res.send(`
        <html>
        <head>
            <title>Registration Successful</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 50px;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .success-container {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 40px;
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
                    max-width: 600px;
                    text-align: center;
                }
                .success-message {
                    font-size: 2.5em;
                    color: #00ff88;
                    margin-bottom: 30px;
                    font-weight: bold;
                }
                .data-summary {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 25px;
                    border-radius: 15px;
                    margin: 20px 0;
                    text-align: left;
                }
                .data-item {
                    margin: 12px 0;
                    font-size: 1.1em;
                }
                .label {
                    font-weight: bold;
                    color: #00ff88;
                }
                .value {
                    margin-left: 10px;
                }
                .back-link {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    text-decoration: none;
                    padding: 15px 30px;
                    border-radius: 10px;
                    margin-top: 25px;
                    transition: background-color 0.3s;
                }
                .back-link:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            </style>
        </head>
        <body>
            <div class="success-container">
                <div class="success-message">✅ Got Data</div>
                <h2>Registration Successful!</h2>

                <div class="data-summary">
                    <h3>📝 Submitted Information:</h3>
                    <div class="data-item">
                        <span class="label">Name:</span>
                        <span class="value">${name || 'Not provided'}</span>
                    </div>
                    <div class="data-item">
                        <span class="label">Date of Birth:</span>
                        <span class="value">${dob || 'Not provided'}</span>
                    </div>
                    <div class="data-item">
                        <span class="label">Phone:</span>
                        <span class="value">${phone || 'Not provided'}</span>
                    </div>
                    <div class="data-item">
                        <span class="label">Email:</span>
                        <span class="value">${email || 'Not provided'}</span>
                    </div>
                    <div class="data-item">
                        <span class="label">Gender:</span>
                        <span class="value">${gender || 'Not provided'}</span>
                    </div>
                    <div class="data-item">
                        <span class="label">Languages:</span>
                        <span class="value">${languageList || 'None selected'}</span>
                    </div>
                    <div class="data-item">
                        <span class="label">State:</span>
                        <span class="value">${state || 'Not selected'}</span>
                    </div>
                </div>

                <a href="/register" class="back-link">Register Another User</a>
            </div>
        </body>
        </html>
    `);
});

// Home route
app.get('/', (req, res) => {
    res.redirect('/register');
});

const PORT = 4003;
app.listen(PORT, () => {
    console.log(`Registration server running on http://localhost:${PORT}`);
    console.log('Visit: http://localhost:4003/register');
});

// To run:
// 1. Create register.html in public folder
// 2. npm install express
// 3. node sectionC_q4_server.js