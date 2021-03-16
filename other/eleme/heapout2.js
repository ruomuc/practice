const http = require('http');

http.createServer(function (req, res) {
    let array = [];
    while (1) {
        array.push(1)
    }
    res.end('hello')
}).listen(8849);

