const fs = require("fs").promises;

async function getTextFiles(directoryPath) {
  // Existing code: Do not modify
  if (!directoryPath) {
    throw new Error("Directory path is required.");
  }

  // Implement missing logic
}

// Example call
getTextFiles(".").then(console.log).catch(console.error);
