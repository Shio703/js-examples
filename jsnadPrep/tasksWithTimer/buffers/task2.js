// Task 2: Concatenate two buffers
// Problem: Create two Buffers: Buffer.from('Hello ') and
// Buffer.from('World!'). Concatenate them and log the result.
const { Buffer } = require("buffer");

const buf1 = Buffer.from("Hello ", "utf-8");
const buff2 = Buffer.from("World!", "utf-8");
const concat = Buffer.concat([buf1, buff2]);

console.log(buf1 + buff2);
console.log(concat.toString());
