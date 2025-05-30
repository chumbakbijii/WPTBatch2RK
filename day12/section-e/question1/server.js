// server.js - Express Server for Movie Data Management
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files

// In-memory storage for movies (in production, use a database)
let movies = [];
let movieIdCounter = 1;

// Validation functions
function validateMovieName(name) {
    if (!name || name.trim().length < 5) {
        return 'Movie name must be at least 5 characters long';
    }
    return null;
}

function validateActor(actor) {
    if (!actor || actor.trim().length < 3) {
        return 'Actor name must be at least 3 characters long';
    }
    return null;
}

function validateReleaseDate(date) {
    if (!date) {
        return 'Release date is required';
    }
    return null;
}

function validateMovieType(movieType) {
    if (!movieType || !Array.isArray(movieType) || movieType.length === 0) {
        return 'At least one movie type must be selected';
    }
    
    const validTypes = ['2D', '3D', 'IMAX'];
    for (let type of movieType) {
        if (!validTypes.includes(type)) {
            return 'Invalid movie type selected';
        }
    }
    return null;
}

// Routes

// GET all movies
app.get('/api/movies', (req, res) => {
    try {
        res.json({
            success: true,
            data: movies,
            message: 'Movies retrieved successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving movies',
            error: error.message
        });
    }
});

// POST new movie
app.post('/api/movies', (req, res) => {
    try {
        const { movieName, actor, releaseDate, movieType } = req.body;

        // Validate all fields
        const errors = {};

        const movieNameError = validateMovieName(movieName);
        if (movieNameError) errors.movieName = movieNameError;

        const actorError = validateActor(actor);
        if (actorError) errors.actor = actorError;

        const releaseDateError = validateReleaseDate(releaseDate);
        if (releaseDateError) errors.releaseDate = releaseDateError;

        const movieTypeError = validateMovieType(movieType);
        if (movieTypeError) errors.movieType = movieTypeError;

        // If there are validation errors, return them
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Validation errors',
                errors: errors
            });
        }

        // Create new movie
        const newMovie = {
            id: movieIdCounter++,
            movieName: movieName.trim(),
            actor: actor.trim(),
            releaseDate,
            movieType,
            createdAt: new Date().toISOString()
        };

        // Add to storage
        movies.push(newMovie);

        // Return success response
        res.status(201).json({
            success: true,
            data: newMovie,
            message: 'Movie added successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
});

// GET single movie by ID
app.get('/api/movies/:id', (req, res) => {
    try {
        const movieId = parseInt(req.params.id);
        const movie = movies.find(m => m.id === movieId);

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'Movie not found'
            });
        }

        res.json({
            success: true,
            data: movie,
            message: 'Movie retrieved successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving movie',
            error: error.message
        });
    }
});

// PUT update movie
app.put('/api/movies/:id', (req, res) => {
    try {
        const movieId = parseInt(req.params.id);
        const movieIndex = movies.findIndex(m => m.id === movieId);

        if (movieIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Movie not found'
            });
        }

        const { movieName, actor, releaseDate, movieType } = req.body;

        // Validate all fields
        const errors = {};

        const movieNameError = validateMovieName(movieName);
        if (movieNameError) errors.movieName = movieNameError;

        const actorError = validateActor(actor);
        if (actorError) errors.actor = actorError;

        const releaseDateError = validateReleaseDate(releaseDate);
        if (releaseDateError) errors.releaseDate = releaseDateError;

        const movieTypeError = validateMovieType(movieType);
        if (movieTypeError) errors.movieType = movieTypeError;

        // If there are validation errors, return them
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Validation errors',
                errors: errors
            });
        }

        // Update movie
        movies[movieIndex] = {
            ...movies[movieIndex],
            movieName: movieName.trim(),
            actor: actor.trim(),
            releaseDate,
            movieType,
            updatedAt: new Date().toISOString()
        };

        res.json({
            success: true,
            data: movies[movieIndex],
            message: 'Movie updated successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating movie',
            error: error.message
        });
    }
});

// DELETE movie
app.delete('/api/movies/:id', (req, res) => {
    try {
        const movieId = parseInt(req.params.id);
        const movieIndex = movies.findIndex(m => m.id === movieId);

        if (movieIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Movie not found'
            });
        }

        // Remove movie from array
        const deletedMovie = movies.splice(movieIndex, 1)[0];

        res.json({
            success: true,
            data: deletedMovie,
            message: 'Movie deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting movie',
            error: error.message
        });
    }
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Movie Data Management API endpoints:');
    console.log(`  GET    /api/movies      - Get all movies`);
    console.log(`  POST   /api/movies      - Add new movie`);
    console.log(`  GET    /api/movies/:id  - Get movie by ID`);
    console.log(`  PUT    /api/movies/:id  - Update movie`);
    console.log(`  DELETE /api/movies/:id  - Delete movie`);
});

module.exports = app;