const fs = require("fs").promises;

async function safeReadFile(filePath) {
  if (!filePath) throw new Error("File path required");

  // Read file safely and return "ERROR" on failure
  try {
    return await fs.readFile(filePath, { encoding: "utf-8" });
  } catch (error) {
    return "ERROR";
  }
}

// Example
safeReadFile("nofile.txt").then(console.log); // Should print "ERROR"
