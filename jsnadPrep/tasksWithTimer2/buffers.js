// 1. Buffers
// Task:
// Write a function that:

// Reads a binary file into a Buffer.
// Searches the buffer for occurrences of the byte 0x41 (ASCII 'A').
// Replaces all occurrences of 0x41 with 0x42 (ASCII 'B').
// Writes the modified buffer back to a new file.
// Requirements:

// Use fs module.
// Handle errors if the file doesn’t exist.
// Ensure efficient memory usage.
const fs = require("fs/promises");
const { Buffer } = require("buffer");
const { existsSync } = require("fs");

const myFunc = (filePath) => {
    if (!existsSync(filePath)) {
        console.log("File Doesn't exists!");
        process.exit(1);
    }
  fs.readFile(filePath, "base64").then((fileContent) => {
    const myBuff = Buffer.from(fileContent);

    console.log(fileContent)
    
    console.log("Original Buffer: \n", myBuff);
    if (myBuff.includes(0x41)) {
      const modifiedBuff = myBuff.map((byte) => (byte === 0x41 ? 0x42 : byte));
      console.log("modified Buffer: \n", modifiedBuff);
    }
  });
};
myFunc("./binaryfile.bi");
