const fs = require("fs").promises;

async function appendJsonToFile(filePath, data) {
  if (!filePath || typeof data !== "object") {
    throw new Error("Valid file path and data required");
  }

  // Read, update, write JSON array
}

// Example
appendJsonToFile("data.json", { id: 2, name: "Test" });
