const fs = require("fs");

function watchFileForChange(filePath) {
  if (!filePath) throw new Error("File path is required");

  // Implement file watching logic
  const wathcher = fs.watch(filePath);
  wathcher.on("change", (event, fileName) => console.log(event, ":", fileName));
}

// Example
watchFileForChange("somefile.txt");
