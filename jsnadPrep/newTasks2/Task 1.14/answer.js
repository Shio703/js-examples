const fs = require("fs").promises;
const path = require("path");

async function listAllFiles(directory) {
  if (!directory) throw new Error("Directory path is required");

  // Recursively collect all file paths
}

// Example
listAllFiles("./example").then(console.log);
