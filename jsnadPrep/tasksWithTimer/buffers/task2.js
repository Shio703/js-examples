// Task 2: Concatenate two buffers
// Problem: Create two Buffers: Buffer.from('Hello ') and
// Buffer.from('World!'). Concatenate them and log the result.

const { Buffer } = require("node:buffer");

const buff1 = Buffer.from("Hello ");
const buff2 = Buffer.from("World!");

const concat = buff1 + buff2;
console.log(concat);
