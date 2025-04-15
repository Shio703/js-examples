const fs = require("fs").promises;

async function getTextFiles() {
  // Existing code: Do not modify
  const files = await fs.readdir(".");

  // Add the necessary logic here to filter `.txt` files
  return files.filter((file, index, array) => file.includes(".txt"));
  // but better way is to use path.extname() in filter.
}

getTextFiles().then(console.log).catch(console.error);
