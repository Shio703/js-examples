// Task 1: Read environment variables

// Problem: Write a script that:

// Reads an environment variable called USER_NAME.
// Logs "Hello, USER_NAME" (e.g., if USER_NAME=Alice, it logs "Hello, Alice").
// If the variable is missing, logs "USER_NAME not set".
require("dotenv").config();
const name = process.env.USER_NAME;

if (name === "Alice") {
  console.log("Hello, " + name);
}
