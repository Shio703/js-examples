// Task 1: Read a file using streams
// Problem: Write a script that reads bigfile.txt 
// using a readable stream and logs the content without loading it all into memory.
const fs = require('fs')

const readStream = fs.createReadStream('./bigfile.txt', {encoding: "utf-8"});

readStream.on('data', (data)=> console.log(data));