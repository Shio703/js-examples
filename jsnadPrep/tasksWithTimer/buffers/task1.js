// Task 1: Convert a string to a Buffer and back
// Problem: Write a function that:

// Converts "JSNAD Exam" to a buffer.
// Logs the buffer.
// Converts it back to a string.

const { Buffer } = require("node:buffer");

const toBuff = (string) => {
  const buffed = Buffer.from(string);
  const unbuffed = buffed.toString();
  console.log(buffed, "\n", unbuffed);
};

toBuff("JSNAD Exam");
