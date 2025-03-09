// Task 2: Pipe a readable stream to a writable stream
// Problem: Write a script that:

// Reads input.txt using a stream.
// Pipes the data into output.txt.

const { createReadStream, createWriteStream } = require("node:fs");

const readable = createReadStream("./input.txt", { encoding: "utf-8" });

const writable = createWriteStream("./output.txt", { encoding: "utf-8" });
readable.pipe(writable);
