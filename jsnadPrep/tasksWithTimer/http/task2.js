// Task 2: Serve a JSON response
// Problem: Modify the previous server:

// /api should return { "message": "Hello API" }.
const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello World!");
  } else if (req.url === "/api") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(JSON.stringify({ message: "Hello API" }));
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not Found 404");
  }
});

const port = 3000;
server.listen(port, () => console.log("server is running on: ", port));
