const fs = require("fs");
const http = require("node:http");
// reading files asyncronously
fs.readFile("./input.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("error reading the file:", err);
    process.exit(1);
  }
  console.log("data:", data);
});

// creating a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello");
});
const port = 3000;
server.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
