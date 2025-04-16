const fs = require("fs").promises;

async function safeReadFile(filePath) {
  if (!filePath) throw new Error("File path required");

  // Read file safely and return "ERROR" on failure
}

// Example
safeReadFile("nofile.txt").then(console.log); // Should print "ERROR"
