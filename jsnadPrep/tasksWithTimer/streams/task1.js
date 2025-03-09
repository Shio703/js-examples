// Task 1: Read a file using streams
// Problem: Write a script that reads bigfile.txt
// using a readable stream and logs the content without loading it all into memory.

const { createReadStream } = require("node:fs");

const raeder = createReadStream("./bigfile.txt", { encoding: "utf-8" });

raeder.on("error", (err) => console.error(err));
raeder.on("data", (data) => console.log(data));
