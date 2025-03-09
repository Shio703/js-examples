// Task 2: Accept command-line arguments

// Problem: Create a script that:

// Accepts a command-line argument --greet.
// Logs "Hello, <value>" if provided.
// If missing, logs "Usage: node script.js --greet <name>"

const option = process.argv[2];
const providedName = process.argv[3];

if (option && providedName) {

  if (option === "--greet") {
    console.log(`Hello, ${providedName}`);

  }else{
    console.log("Usage: node script.js --greet <name>");  
  }
  
} else {
  console.log("Usage: node script.js --greet <name>");
}
