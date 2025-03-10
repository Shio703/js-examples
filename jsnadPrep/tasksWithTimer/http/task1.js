// Task 1: Create a simple HTTP server
// Problem: Write an HTTP server that:

// Responds "Hello, world!" for /.
// Responds with 404 Not Found for any other path

const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello World!");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not Found 404");
  }
});

const port = 3000;
server.listen(port, () => console.log("server is running on: ", port));
