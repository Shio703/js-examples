const { exec } = require("node:child_process");
const { readFileSync } = require("node:fs");
const url = require("url");
const http = require("node:http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);

  if (req.url === "/") {
    res.writeHead(200,  { "content-type": "application/json" } );
    res.end(
      JSON.stringify({
        message: " Welcome to my Simple api page:) ",
        options: {
          toListDir: " /list ",
          toFetchFile: " /file?name=03-2023.json ",
        },
      })
    );
  } else if (req.url === "/list") {
    exec(`ls ./json`, (error, stdout, stderr) => {
      if (error) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(
          JSON.stringify({ message: "error occured (error feed)", error })
        );
      } else if (stderr) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(
          JSON.stringify({ message: "error occured (stderr feed)", stderr })
        );
      } else {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(stdout);
      }
    });
  } else if (req.url.startsWith("/file")) {
    try {
      const parsedUrl = url.parse(req.url, true);
      const queryParams = parsedUrl.query;

      const fileContent = readFileSync(`./json/${queryParams.name}`);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(fileContent);
    } catch (error) {
      res.writeHead(500, { "content-type": "application/json" });
      if (error.code === "ENOENT") {
        res.end(
          JSON.stringify({
            message: "Requested file doesn't exists!",
            code: "ENOENT",
          })
        );
      } else {
        res.end(JSON.stringify({ message: "error occured", error }));
      }
    }
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Resource not found 404:(");
  }
});

const port = 3000;
server.listen(port, () => console.log(`http://localhost:${port}`));
