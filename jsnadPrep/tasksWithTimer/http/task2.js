// Task 2: Serve a JSON response
// Problem: Modify the previous server:

// /api should return { "message": "Hello API" }.
const http = require("http");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(JSON.stringify({ message: "Hello, World!" }));
        break;

      default:
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Not Found 404:(");
        break;
    }
  })
  .listen(3000, () => console.log("server started!"));
