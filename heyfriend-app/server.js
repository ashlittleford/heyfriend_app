const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = '127.0.0.1'; // Only bind to localhost
const DIST_DIR = path.resolve(__dirname, 'dist');

const server = http.createServer((req, res) => {
    // 1. Sanitize the URL to prevent directory traversal
    let safeUrl;
    try {
        safeUrl = decodeURIComponent(req.url);
    } catch (e) {
        res.writeHead(400);
        res.end('Bad Request');
        return;
    }

    // Remove query string if present
    const queryIndex = safeUrl.indexOf('?');
    if (queryIndex !== -1) {
        safeUrl = safeUrl.substring(0, queryIndex);
    }

    // Remove leading slash to ensure join works as relative
    const relativeUrl = safeUrl.startsWith('/') ? safeUrl.slice(1) : safeUrl;

    // Resolve path
    const filePath = path.join(DIST_DIR, relativeUrl);
    const resolvedPath = path.resolve(filePath);

    // Security Check: Ensure the resolved path is within DIST_DIR
    if (!resolvedPath.startsWith(DIST_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    // Helper to serve the main index.html
    const serveIndex = () => {
        fs.readFile(path.join(DIST_DIR, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            }
        });
    };

    // Check if file exists and get stats
    fs.stat(resolvedPath, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // If path has extension, return 404 (missing asset)
                if (path.extname(resolvedPath)) {
                    res.writeHead(404);
                    res.end('Not Found');
                } else {
                    // Otherwise serve index.html for SPA routing
                    serveIndex();
                }
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
            return;
        }

        if (stats.isDirectory()) {
            // If request is for a directory (e.g. root '/'), serve index.html
            serveIndex();
        } else {
            // It's a file, serve it
            // Determine content type
            const extname = path.extname(resolvedPath).toLowerCase();
            let contentType = 'text/html';
            switch (extname) {
                case '.js': contentType = 'text/javascript'; break;
                case '.css': contentType = 'text/css'; break;
                case '.json': contentType = 'application/json'; break;
                case '.png': contentType = 'image/png'; break;
                case '.jpg': contentType = 'image/jpg'; break;
                case '.gif': contentType = 'image/gif'; break;
                case '.svg': contentType = 'image/svg+xml'; break;
                case '.ico': contentType = 'image/x-icon'; break;
                case '.html': contentType = 'text/html'; break;
                default: contentType = 'application/octet-stream';
            }

            fs.readFile(resolvedPath, (err, content) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error reading file');
                } else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                }
            });
        }
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    console.log('Press Ctrl+C to stop the server.');
});
