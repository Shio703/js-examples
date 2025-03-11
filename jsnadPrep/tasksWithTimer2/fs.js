// 6. File System (fs module)
// Task:

// Write a script that watches a directory for file changes using fs.watch().
// Log when files are added, removed, or modified.
// Ensure it works recursively for all subdirectories.
const fs = require("fs");

const myFile = fs.watch("./testDirectory", { recursive: true });

myFile.on("change", (event, fileName) => {
  if (event === "rename") {
    console.log(fileName, "Removed or Renamed");
  } else {
    console.log(event, "changed: ", fileName);
  }
});
