// create a function that will return an absolute
// paths of all files in a given directory.
const fs = require("fs/promises");
const path = require("path");

const pathResolver = async (dirPath) => {
  const files = await fs.readdir(dirPath, { encoding: "utf-8" });
  let result = [];
  for (let i = 0; i < files.length; i++) {
    result.push(path.resolve(path.join(__dirname, "myDir", files[i])));
  }
  return result;
};

pathResolver("../packageManagement").then(console.log);
