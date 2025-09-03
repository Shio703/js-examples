// Task 3: Read query parameters
// Problem: Modify the server:

// /greet?name=Alice should respond "Hello, Alice!".
const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(JSON.stringify({ message: "Hello, World!" }));
        break;

      case req.url.startsWith("/greet"):
        // thats why i'm gonna use if/else
      const urlInfo = url.parse(req.url);
        console.log(urlInfo);
        break;
      default:
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Not Found 404:(");
        break;
    }
  })
  .listen(3000, () => console.log("server started!"));
