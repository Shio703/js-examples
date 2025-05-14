const fs = require("fs");
const { Transform } = require("stream");

function streamUppercase(inputFile, outputFile) {
  if (!inputFile || !outputFile) throw new Error("Both paths required");

  // Implement streaming logic with a Transform stream
  const reader = fs.createReadStream(inputFile, { encoding: "utf-8" });

  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const toUpper = chunk.toString().toUpperCase();
      callback(null, toUpper);
    },
  });

  const writer = fs.createWriteStream(outputFile, { encoding: "utf-8" });

  reader.on("error", (err) => {
    return console.error("reader:", err);
  });
  transform.on("error", (err) => {
    return console.error("transformer:", err);
  });

  reader.pipe(transform).pipe(writer);
}

// Example
streamUppercase("input.txt", "output.txt");
