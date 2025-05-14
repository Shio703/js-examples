const { Readable } = require("stream");

function arrayToStream(array) {
  if (!Array.isArray(array)) throw new Error("Must pass an array");

  // Return a readable stream
  return new Readable.from(array);
}

// Example
const stream = arrayToStream([1, 2, 3]);
stream.on("data", console.log);
