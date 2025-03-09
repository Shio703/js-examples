// Task 2: Read multiple files using Promises

// Problem: Write a function that reads

//  file1.txt and file2.txt in parallel and logs both contents.

const fs = require("fs/promises");

const files = ["file1.txt", "file2.txt"];

Promise.all(
  files.map((fileName) => fs.readFile(fileName, { encoding: "utf-8" }))
).then((contents) => {
  contents.forEach((content) => console.log(`file contents: \n${content}`));
});
