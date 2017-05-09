// load the http module to create the http server
var http = require('http');

// Configure our HTTP server to respond with "hello world" to all requests.
var server = createServer(function (requesrt, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Welcome to Node.js!\n");
});

// Listen on port 3000, IP default to 127.0.0.1
server.listen(3000);

// Put a friendly message on the terminal
console.log("Server running at http://...:3000");
