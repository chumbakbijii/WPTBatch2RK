// DAY11/sectionC_q3_calculator_server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Serve calculator page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator.html'));
});

app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator.html'));
});

// Handle calculation POST request
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.send(`
            <h1>Error</h1>
            <p>Please enter valid numbers!</p>
            <a href="/calculator">Go Back</a>
        `);
    }

    let result;
    let operationSymbol;

    switch(operation) {
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
                    <h1>Error</h1>
                    <p>Cannot divide by zero!</p>
                    <a href="/calculator">Go Back</a>
                `);
            }
            result = number1 / number2;
            operationSymbol = '÷';
            break;
        case 'modulus':
            if (number2 === 0) {
                return res.send(`
                    <h1>Error</h1>
                    <p>Cannot perform modulus by zero!</p>
                    <a href="/calculator">Go Back</a>
                `);
            }
            result = number1 % number2;
            operationSymbol = '%';
            break;
        default:
            return res.send(`
                <h1>Error</h1>
                <p>Invalid operation selected!</p>
                <a href="/calculator">Go Back</a>
            `);
    }

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Calculation Result</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; background-color: #f9f9f9; }
                .result-container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 15px rgba(0,0,0,0.1); text-align: center; }
                .calculation { font-size: 24px; margin: 20px 0; }
                .result { font-size: 32px; font-weight: bold; color: #28a745; margin: 20px 0; }
                a { display: inline-block; margin: 10px; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="result-container">
                <h1>Calculation Result</h1>
                <div class="calculation">${number1} ${operationSymbol} ${number2}</div>
                <div class="result">= ${result}</div>
                <a href="/calculator">Calculate Again</a>
            </div>
        </body>
        </html>
    `);
});

const PORT = 3004;
app.listen(PORT, () => {
    console.log(`Calculator server running on http://localhost:${PORT}`);
    console.log('Make sure calculator.html is in the same directory!');
    console.log('Visit: http://localhost:3004/calculator');
});

// IMPORTANT: Before running this file, make sure to:
// 1. Install Express: npm install express
// 2. Make sure calculator.html is in the same directory as this JS file
// To run: node DAY11/sectionC_q3_calculator_server.js