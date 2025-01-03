//Create web sever
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 8080;
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
//Create a list of comments
let comments = [];
//Read comments from file
fs.readFile('comments.json', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        comments = JSON.parse(data);
    }
});
//Handle POST requests
server.on