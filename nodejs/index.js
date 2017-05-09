// load the http module to create the http server
var http = require('http');

// Configure our HTTP server to respond with "hello world" to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

// Listen on port 3000, IP default to 127.0.0.1
server.listen(3000);

// Put a friendly message on the terminal
console.log("Server running at http://...:3000");


// fix for ctrl+c not working
process.on('SIGINT', function () {
  process.exit(1);
});
