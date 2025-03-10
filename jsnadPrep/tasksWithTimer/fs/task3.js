// Task 3: Delete a file safely
// Problem: Implement a function that deletes a file
// called deleteMe.txt, but only if it exists.
const fs = require("fs");

const deleter = (filePath) => {
  if (filePath) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`file ${filePath} was deleted!`);
      }
    });
  }
};

deleter("./deleteMe.txt");
