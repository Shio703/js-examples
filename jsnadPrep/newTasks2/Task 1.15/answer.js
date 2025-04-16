const fs = require("fs");
const { Transform } = require("stream");

function streamUppercase(inputFile, outputFile) {
  if (!inputFile || !outputFile) throw new Error("Both paths required");

  // Implement streaming logic with a Transform stream
}

// Example
streamUppercase("input.txt", "output.txt");
