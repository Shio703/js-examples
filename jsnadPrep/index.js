const fs = require("fs");
const { exec } = require("node:child_process");
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

// console.log(process.cpuUsage());

const port = 3000;
server.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
debugger;
const testVar = "oo sheesh it works:)";

const childProcess = require("node:child_process");

const ls = childProcess.spawn("dir", ["/s"], {
  cwd: process.cwd(),
  shell: true,
});
ls.stdout.on("data", (data) => {
  console.log(data.toString());
});
ls.stderr.on("data", (err) => {
  console.log(err);
  process.exit(1);
});
ls.on("error", (error) => {
  console.log(error);
  process.exit(1);
});

// child processes exe()
const execLs = exec("dir /s");

execLs.stdout.on("data", (data) => {
  console.log("exec data: ", data);
});
execLs.stderr.on("data", (err) => {
  console.log("exec stderr: ", err);
  process.exit(1);
});
execLs.on("error", (error) => {
  console.log("exec command error code: ", error.code, "\n", error);
  process.exit(1);
});

// exec callback approach:
const execFunc = exec("dir", (error, stdout, stderr) => {
  if (error) {
    console.log(
      "error in exec(): ",
      error,
      "\n",
      `exited with code: ${error.code}`
    );
    //  i used process.exit( code ) but it is not neccessary when node js exits process itself when it sees an error
    process.exit(1);
  } else if (stderr) {
    console.log(
      "error trough stderr: ",
      stderr,
      "\n",
      `exited with code: ${error.code}`
    );
    process.exit(1);
  } else {
    console.log("data trough stdout: ", stdout, "\n", "exited with code: 0 ");
  }
});
