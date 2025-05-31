const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files

// In-memory storage for movies
let movies = [];

// Calculator endpoint
app.post('/calculate', (req, res) => {
    try {
        const { operation, num1, num2 } = req.body;
        let result;

        switch (operation) {
            case 'addition':
                result = num1 + num2;
                break;
            case 'subtraction':
                result = num1 - num2;
                break;
            case 'multiplication':
                result = num1 * num2;
                break;
            case 'division':
                if (num2 === 0) {
                    return res.status(400).json({ error: 'Division by zero is not allowed' });
                }
                result = num1 / num2;
                break;
            default:
                return res.status(400).json({ error: 'Invalid operation' });
        }

        res.json({ 
            result: result,
            operation: operation,
            num1: num1,
            num2: num2
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error occurred' });
    }
});

// Movies endpoints
app.post('/movies', (req, res) => {
    try {
        const { movieName, price, seat } = req.body;
        
        // Basic validation
        if (!movieName || !price || !seat) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newMovie = {
            id: Date.now(), // Simple ID generation
            movieName: movieName,
            price: parseFloat(price),
            seat: seat,
            createdAt: new Date().toISOString()
        };

        movies.push(newMovie);
        console.log('Movie added:', newMovie);
        
        res.status(200).json({ 
            message: 'Movie added successfully', 
            movie: newMovie 
        });
    } catch (error) {
        console.error('Error adding movie:', error);
        res.status(500).json({ error: 'Server error occurred' });
    }
});

app.get('/movies', (req, res) => {
    try {
        res.json(movies);
    } catch (error) {
        console.error('Error getting movies:', error);
        res.status(500).json({ error: 'Server error occurred' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('POST /calculate - Calculator operations');
    console.log('POST /movies - Add movie');
    console.log('GET /movies - Get all movies');
});

module.exports = app;