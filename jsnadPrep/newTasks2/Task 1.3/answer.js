const http = require("http");

function createServer(port) {
  if (!port) throw new Error("Port is required");

  // Implement server logic
  const server = http.createServer((req, res) => {
    if (req) {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Hello, World!");
    }
  });

  server.listen(port, () => console.log(`server started at ${port}`));
}

// Example
createServer(3000);
