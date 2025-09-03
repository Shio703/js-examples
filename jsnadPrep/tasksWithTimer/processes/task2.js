// Task 2: Accept command-line arguments

// Problem: Create a script that:

// Accepts a command-line argument --greet.
// Logs "Hello, <value>" if provided.
// If missing, logs "Usage: node script.js --greet <name>"

const arg = process.argv;
if (arg[2] === "--greet") {
  console.log("Hello,", arg[3]);
} else {
  console.log("Usage: node script.js --greet <name>");
}
