// Task 3: Read query parameters
// Problem: Modify the server:

// /greet?name=Alice should respond "Hello, Alice!".
const http = require("node:http");
const url = require("node:url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello World!");
  } else if (req.url === "/api") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(JSON.stringify({ message: "Hello API" }));
  } else if (req.url.startsWith("/greet")) {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`Hello, ${queryParams.name}`);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not Found 404");
  }
});

const port = 3000;
server.listen(port, () => console.log("server is running on: ", port));
