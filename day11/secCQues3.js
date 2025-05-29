// Section C - Question 3: Calculator with Server Processing
// File: sectionC_q3_server.js

const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve calculator page
app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

// Handle calculation
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.send(`
            <h2>Error: Invalid numbers</h2>
            <a href="/calculator">Go back to calculator</a>
        `);
    }

    let result;
    let operationSymbol;

    switch (operation) {
        case 'addition':
            result = number1 + number2;
            operationSymbol = '+';
            break;
        case 'subtraction':
            result = number1 - number2;
            operationSymbol = '-';
            break;
        case 'multiplication':
            result = number1 * number2;
            operationSymbol = '×';
            break;
        case 'division':
            if (number2 === 0) {
                return res.send(`
                    <h2>Error: Division by zero!</h2>
                    <a href="/calculator">Go back to calculator</a>
                `);
            }
            result = number1 / number2;
            operationSymbol = '÷';
            break;
        case 'modulus':
            if (number2 === 0) {
                return res.send(`
                    <h2>Error: Modulus by zero!</h2>
                    <a href="/calculator">Go back to calculator</a>
                `);
            }
            result = number1 % number2;
            operationSymbol = '%';
            break;
        default:
            return res.send(`
                <h2>Error: Invalid operation</h2>
                <a href="/calculator">Go back to calculator</a>
            `);
    }

    res.send(`
        <html>
        <head>
            <title>Calculation Result</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    min-height: 100vh;
                }
                .result-box {
                    background: rgba(255,255,255,0.1);
                    padding: 30px;
                    border-radius: 20px;
                    display: inline-block;
                    margin: 20px;
                    backdrop-filter: blur(10px);
                }
                .calculation {
                    font-size: 2em;
                    margin: 20px 0;
                }
                .result {
                    font-size: 2.5em;
                    color: #00ff88;
                    font-weight: bold;
                }
                a {
                    color: #00ff88;
                    text-decoration: none;
                    background: rgba(255,255,255,0.2);
                    padding: 10px 20px;
                    border-radius: 10px;
                    margin-top: 20px;
                    display: inline-block;
                }
            </style>
        </head>
        <body>
            <div class="result-box">
                <h1>🧮 Calculation Result</h1>
                <div class="calculation">${number1} ${operationSymbol} ${number2}</div>
                <div class="result">= ${result}</div>
                <br><br>
                <a href="/calculator">Calculate Again</a>
            </div>
        </body>
        </html>
    `);
});

// Home route
app.get('/', (req, res) => {
    res.redirect('/calculator');
});

const PORT = 4002;
app.listen(PORT, () => {
    console.log(`Calculator server running on http://localhost:${PORT}`);
    console.log('Visit: http://localhost:4002/calculator');
});

// To run:
// 1. Create calculator.html in public folder
// 2. npm install express
// 3. node sectionC_q3_server.js