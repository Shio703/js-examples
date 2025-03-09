// Task 2: Create a new directory and write a file inside it

// Problem: Write a Node.js script that:

// Checks if a directory myDir exists.
// If not, creates it.
// Writes a file message.txt inside it with content "Hello from Node.js".

const fs = require("node:fs");

function writeFile(dirPath, fileName) {
  fs.writeFile(dirPath + "/" + fileName, "hello from nodejs", (err) => {
    if (err) {
      console.error(err);
    }
  });
}

const myFunc = (dirPath, fileName) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    writeFile(dirPath, fileName);
  } else {
    writeFile(dirPath, fileName);
  }
};

myFunc("./myDir", "message.txt");
