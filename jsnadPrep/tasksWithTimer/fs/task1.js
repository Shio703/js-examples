// 1. Node.js File System (fs module)

// Task 1: Read and write to a file asynchronously
// Problem: Write a Node.js script that:

// Reads the contents of input.txt.
// Converts all text to uppercase.
// Saves it to output.txt.

const fs = require("fs");

const reader = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const toUpper = reader.toUpperCase();

const writer = fs.writeFileSync("./output.txt", toUpper);
