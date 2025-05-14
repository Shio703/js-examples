const { Buffer } = require("buffer");

function mergeBuffers(buffer1, buffer2) {
  if (!Buffer.isBuffer(buffer1) || !Buffer.isBuffer(buffer2)) {
    throw new Error("Inputs must be buffers");
  }

  // Your code here
}

const buff1 = Buffer.alloc(7, "f");
const buff2 = Buffer.alloc(7, "e");

mergeBuffers(buff1, buff2);
