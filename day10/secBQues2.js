// DAY11/sectionB_q2_html_server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/data') {
        // Serve data.html
        fs.readFile(path.join(__dirname, 'data.html'), (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('data.html not found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (pathname === '/profile') {
        // Serve profile.html
        fs.readFile(path.join(__dirname, 'profile.html'), (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('profile.html not found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Visit:');
    console.log('- http://localhost:3001/data');
    console.log('- http://localhost:3001/profile');
    console.log('Make sure data.html and profile.html are in the same directory!');
});

// To run: node DAY11/sectionB_q2_html_server.js