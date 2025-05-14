const crypto = require("crypto");

function verifySignature(message, signature, secret) {
  if (!message || !signature || !secret) {
    throw new Error("All parameters required");
  }

  // Your code here
}

verifySignature();
