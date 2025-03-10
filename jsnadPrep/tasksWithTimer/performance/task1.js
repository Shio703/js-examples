// Task 1: Measure execution time
// Problem: Write a script that:

// Measures how long it takes to read bigfile.txt.
// Logs the execution time.

const fs = require("fs/promises");
console.time("readIn");
fs.readFile("./bigfile.txt").then(() => console.timeEnd("readIn"));
