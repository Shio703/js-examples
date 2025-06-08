const fs = require("fs").promises;
const path = require("path");

async function countFilesInDirectory(dirPath) {
  if (!dirPath) throw new Error("Directory path required");

  // Your code here
  const res = (await fs.readdir(dirPath)).length;
  return res;
}

countFilesInDirectory("../Task 1.7").then(console.log);
