const { exec } = require("node:child_process");
const { readFileSync } = require("node:fs");
const url = require("url");
const http = require("node:http");
require("dotenv").config();

const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:3000"];

const server = http.createServer((req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log(req.method, req.url, res.statusCode);
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
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
        res.writeHead(500, {
          "content-type": "application/json",
        });
        res.end(
          JSON.stringify({ message: "error occured (error feed)", error })
        );
      } else if (stderr) {
        res.writeHead(500, {
          "content-type": "application/json",
        });
        res.end(
          JSON.stringify({ message: "error occured (stderr feed)", stderr })
        );
      } else {
        res.writeHead(200, {
          "content-type": "application/json",
        });
        const toArray = stdout.split("\n");
        toArray.pop();
        res.end(JSON.stringify(toArray));
      }
    });
  } else if (req.url.startsWith("/file")) {
    try {
      const parsedUrl = url.parse(req.url, true);
      const queryParams = parsedUrl.query;

      const fileContent = readFileSync(`./json/${queryParams.name}`);

      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(fileContent);
    } catch (error) {
      if (error.code === "ENOENT") {
        res.writeHead(404, {
          "content-type": "application/json",
        });
        res.end(
          JSON.stringify({
            message: "Requested file doesn't exists!",
            code: "ENOENT",
          })
        );
      } else {
        res.writeHead(500, {
          "content-type": "application/json",
        });
        res.end(JSON.stringify({ message: "error occured", error }));
      }
    }
  } else {
    res.writeHead(404, {
      "content-type": "text/plain",
    });
    res.end("Resource not found 404:(");
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`http://localhost:${port}`));
