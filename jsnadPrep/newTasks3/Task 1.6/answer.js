const { createReadStream } = require("fs");
const { Transform } = require("stream");

const dataToTransform = "test data for testing purpose.";
function createUppercaseTransform() {
  // Your code here
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase());
    },
  });
  const readable = createReadStream().read()
  transformStream.on("end", () => console.log("Transform Finished."));
  readable.pipe(transformStream);
}

createUppercaseTransform();
