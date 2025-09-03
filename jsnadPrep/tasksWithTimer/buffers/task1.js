// Task 1: Convert a string to a Buffer and back
// Problem: Write a function that:

// Converts "JSNAD Exam" to a buffer.
// Logs the buffer.
// Converts it back to a string.
const { Buffer } = require("node:buffer");

const myFunc = (string) => {
  const size = string.length;
  const buff = Buffer.alloc(size, string);

  console.log("As a Buffer:", buff);
  console.log("As a String:", buff.toString("utf-8"));
};

myFunc("JSNAD Exam");
