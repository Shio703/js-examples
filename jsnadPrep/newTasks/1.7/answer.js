const fs = require("fs").promises;

async function processFile(filePath, outputFilePath) {
  // Existing code: Do not modify
  if (!filePath || !outputFilePath) {
    throw new Error("Both filePath and outputFilePath are required.");
  }

  // Implement missing logic
  const fileContent = await fs.readFile(filePath, { encoding: "utf-8" });
  const toUpper = fileContent.toUpperCase();
  await fs.writeFile(outputFilePath, toUpper, { encoding: "utf-8" });
}

// Example call
processFile("input.txt", "output.txt").catch(console.error);
