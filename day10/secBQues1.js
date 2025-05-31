// DAY11/sectionB_q1_basic_server.js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (path === '/data') {
        res.end('this is data');
    } else if (path === '/profile') {
        res.end('this is profile');
    } else {
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Visit:');
    console.log('- http://localhost:3000/data');
    console.log('- http://localhost:3000/profile');
});

// To run: node DAY11/sectionB_q1_basic_server.js