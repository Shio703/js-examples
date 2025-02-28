const http = require("node:http");

// creating a server
const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("hello, from main endpoint");
      break;
    case "/about":
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "about the api v0.0.1",
          status: "it works fine",
        })
      );
      break;
    default:
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Endpoint doesn't exists! (code: 404)",
          status: "code 404 resource couldn't be found:(",
        })
      );
      break;
  }
});
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// console.log(process.cpuUsage());

const port = 3000;
server.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
