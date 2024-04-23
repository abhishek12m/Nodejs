const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const filePath = path.join(__dirname, 'public', pathname === '/' ? 'index.html' : pathname);

  if (pathname === '/api/search' && req.method === 'GET') {
    const searchTerm = parsedUrl.query.q || '';
    const searchData = performSearch(searchTerm);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(searchData));
  } else {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code == 'ENOENT') {
          // File not found
          fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          });
        } else {
          // Some server error
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        // Success
        const extname = path.extname(filePath);
        let contentType = 'text/html';

        switch (extname) {
          case '.js':
            contentType = 'text/javascript';
            break;
          case '.css':
            contentType = 'text/css';
            break;
          case '.json':
            contentType = 'application/json';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.jpg':
            contentType = 'image/jpg';
            break;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf8');
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

function performSearch(term) {
  // Dummy search function
  return { results: [`Result  ${term}`] };
}
