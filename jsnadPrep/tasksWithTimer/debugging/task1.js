// Task 1: Use try...catch for error handling
// Problem: Modify this script to handle errors:

const fs = require("fs");
try {
  const data = fs.readFileSync("config.json", "utf8");
  console.log(data);
} catch (err) {
  console.log("my error handler: ",err);
}
