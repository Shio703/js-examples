// Task 3: Handle async/await errors

// Problem: Implement an async function that

// reads config.json and logs the content, but catches and logs any errors.

const { readFile } = require("fs/promises");

const myFunc = async (filePath) => {
   return await readFile(filePath, {encoding: "utf8"});
};
myFunc("./config.json").then(console.log);
