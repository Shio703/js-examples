// Task 1: Create a simple HTTP server
// Problem: Write an HTTP server that:

// Responds "Hello, world!" for /.
// Responds with 404 Not Found for any other path
const http = require("http");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Hello, World!");
        break;

      default:
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Not Found 404:(");
        break;
    }
  })
  .listen(3000, () => console.log("server started!"));
