const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..')));

// In-memory storage
let movies = [];
let validatedMovies = [];
let pizzaOrders = [];

// Section D - Question 1: Arithmetic Operations
app.post('/api/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result;

  switch(operation) {
    case 'add':
      result = n1 + n2;
      break;
    case 'subtract':
      result = n1 - n2;
      break;
    case 'multiply':
      result = n1 * n2;
      break;
    case 'divide':
      result = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
      break;
    default:
      result = 'Invalid operation';
  }

  res.json({
    success: true,
    result: result,
    calculation: `${n1} ${operation} ${n2} = ${result}`
  });
});
