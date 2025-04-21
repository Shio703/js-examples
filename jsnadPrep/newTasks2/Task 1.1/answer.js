const { Buffer } = require("node:buffer");
function toHexBuffer(inputStr) {
  if (typeof inputStr !== "string") throw new Error("Input must be string");

  // Implement conversion logic
  return Buffer.from(inputStr);
}

// Example
console.log(toHexBuffer("Node")); // Expected: 4e6f6465
