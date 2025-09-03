// 1. Node.js File System (fs module)

// Task 1: Read and write to a file asynchronously
// Problem: Write a Node.js script that:

// Reads the contents of input.txt.
// Converts all text to uppercase.
// Saves it to output.txt.
const fs = require("fs");
const { Transform } = require("stream");

const readStream = fs.createReadStream("./input.txt", { encoding: "utf-8" });
readStream.on("error", console.error);
// readStream.on("data", (data) => {});
const writeStream = fs.createWriteStream("./outout.txt", { encoding: "utf-8" });

const transform = new Transform({
  transform(chunk, encoding, callback) {
    const toString = chunk.toString("utf8");
    const toUpper = toString.toUpperCase();
    callback(null, toUpper);
  },
});

readStream.pipe(transform).pipe(writeStream);
