// 🔹 Extra Challenge: Combining Topics
// Task:

// Create a script that:
// Reads a JSON file asynchronously.
// Emits an event when the file is successfully read.
// Spawns a child process to count the number of words in the file.
// Uses a buffer to store the processed data.
// Logs the final word count and exits.

const fs = require("fs");
const Eventemitter = require("events");
const { spawn } = require("node:child_process");

const myEmitter = new Eventemitter();
fs.readFile("./test.json", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    myEmitter.emit("read", data);
  }
});

myEmitter.on("read", (data) => {
  // on linux command is: "wc -w". to count lines: wc -l.
  const wc = spawn("wc", ["-w"], { shell: true });
  wc.stdin.write(data);
  wc.stdin.end();

  let buffer = Buffer.alloc(0);

  wc.on("error", (err) => console.error(err));
  wc.stderr.on("data", (data) => console.error(data.toString()));

  wc.stdout.on("data", (wordCount) => {
    console.log("counted words: ", wordCount.toString());
    const dataBuff = Buffer.from(data);
    buffer = Buffer.concat([buffer, dataBuff]);
  });

  wc.on("close", ()=> console.log("Data from buffer: ", buffer.toString()));

});


// Output on linux:
// counted words:  8

// Data from buffer:  {
//   "target": "feria",
//   "event": "love",
//   "until": "eternity"
// }