// Task 3: Handle async/await errors

// Problem: Implement an async function that

// reads config.json and logs the content, but catches and logs any errors.

const fs = require("node:fs/promises");

fs.readFile("./config.json", { encoding: "utf8" })
  .then((fileContent) => console.log(JSON.parse(fileContent)))
  .catch((err) => console.error(err));
