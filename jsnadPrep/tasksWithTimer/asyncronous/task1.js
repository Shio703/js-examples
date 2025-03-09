// Task 1: Convert a callback function to a Promise

// Problem: Convert this callback-based function to return a Promise:
const fs = require("node:fs");

const fileReader = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("file1.txt", "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

fileReader()
  .then((result) => console.log(result))
  .catch((err) => console.log("my error trown here: ", err));
