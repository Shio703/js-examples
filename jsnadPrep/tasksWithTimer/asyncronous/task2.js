// Task 2: Read multiple files using Promises

// Problem: Write a function that reads

const { readFile } = require("fs/promises");
//  file1.txt and file2.txt in parallel and logs both contents.
const files = ["file1.txt", "file2.txt"];

const result = Promise.all(files.map((file) => readFile(file, {encoding: "utf-8"})));
result.then(console.log);
