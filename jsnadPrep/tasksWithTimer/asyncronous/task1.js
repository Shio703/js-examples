// Task 1: Convert a callback function to a Promise

// Problem: Convert this callback-based function to return a Promise:

const fs = require("fs/promises");

try {
  fs.readFile("file1.txt", "utf8").then(console.log);
} catch (error) {
  console.error(error);
}
