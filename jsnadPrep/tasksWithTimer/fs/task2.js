// Task 2: Create a new directory and write a file inside it

// Problem: Write a Node.js script that:

// Checks if a directory myDir exists.
// If not, creates it.
// Writes a file message.txt inside it with content "Hello from Node.js".
const fs = require("fs");
const { promisify } = require("util");
const mkdir = promisify(fs.mkdir);
const fileWrite = promisify(fs.writeFile);

async function myFunc() {
  try {
    await mkdir("./myDir");
    await fileWrite("./myDir/message.txt", "message file in myDir.");
  } catch (err) {
    console.error(err);
  }
}

if (!fs.existsSync("./myDir")) {
  myFunc();
} else {
  fs.writeFileSync("./myDir/message.txt", "message file in myDir.");
}
