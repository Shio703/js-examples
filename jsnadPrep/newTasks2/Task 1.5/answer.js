const path = require("path");

function getFullPath(dir, file) {
  if (!dir || !file) throw new Error("Dir and file are required");

  // Implement logic to join dir and file into full path
  return path.join(dir, file);
}

// Example
console.log(getFullPath("/usr", "bin/node"));
