const fs = require("fs").promises;
const path = require("path");

async function listAllFiles(directory) {
  if (!directory) throw new Error("Directory path is required");

  // Recursively collect all file paths
  const dir = await fs.readdir(directory, { recursive: true });
  return Promise.all(dir.map((file) => path.resolve(file)));
}

// Example
listAllFiles("../Task 1.17").then(console.log);
