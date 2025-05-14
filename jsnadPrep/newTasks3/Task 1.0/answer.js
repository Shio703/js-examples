const fs = require("fs").promises;
const { extname } = require("path");
async function readJsonFile(filePath) {
  if (!filePath) throw new Error("File path is required");
  if (extname(filePath) !== ".json")
    throw new Error("file must be a type of json");
  try {
    const jsonData = await fs.readFile(filePath);
    return JSON.parse(jsonData);
  } catch (error) {
    return "ERROR";
  }
}

// Example
readJsonFile("user.json").then(console.log);
// Expected: { username: "Shio703" } or "ERROR"
