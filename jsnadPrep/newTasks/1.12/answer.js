const fs = require("fs");

function copyFileStream(inputFile, outputFile) {
  // Existing code: Do not modify
  if (!inputFile || !outputFile) throw new Error("Both files required");

  // Implement stream copy logic
  const readable = fs.createReadStream(inputFile, { encoding: "utf-8" });
  const writable = fs.createWriteStream(outputFile, { encoding: "utf-8" });
  readable.pipe(writable);
}

// Example
copyFileStream("source.txt", "destination.txt");
