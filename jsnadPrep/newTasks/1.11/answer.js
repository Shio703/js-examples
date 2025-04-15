const path = require("path");
const fs = require("fs").promises;

async function getTextFiles(directoryPath) {
  // Existing code: Do not modify
  if (!directoryPath) {
    throw new Error("Directory path is required.");
  }

  // Implement missing logic
  const files = await fs.readdir(directoryPath);
  return await Promise.all(
    files.filter((file) => path.extname(file) === ".txt")
  );
}

// Example call
getTextFiles(".").then(console.log).catch(console.error);
