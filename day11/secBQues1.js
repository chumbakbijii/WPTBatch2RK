// Section B - Question 1: Basic Server with Text Responses
// File: sectionB_q1_server.js

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Handle different paths
    if (pathname === '/data') {
        res.end('this is data');
    } else if (pathname === '/profile') {
        res.end('this is profile');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log('- http://localhost:3000/data');
    console.log('- http://localhost:3000/profile');
});

// To run: node sectionB_q1_server.js