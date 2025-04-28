const zlib = require("zlib");

function compressText(input, callback) {
  if (typeof input !== "string" || typeof callback !== "function") {
    throw new Error("Input string and callback are required");
  }

  // Implement gzip compression
  zlib.gzip(input, callback);
}

// Example
compressText("Hello world", (err, result) => {
  if (err) return console.error("Compression failed", err);
  console.log(result); // Should be a Buffer
});
