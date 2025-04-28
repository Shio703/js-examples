const crypto = require("crypto");

function hashData(data) {
  if (typeof data !== "string") throw new Error("Data must be a string");

  // Implement hash logic
  return crypto.createHash("sha256").update(data).digest("hex");
}

// Example
console.log(hashData("secure123")); // Example output: a3b3c...
