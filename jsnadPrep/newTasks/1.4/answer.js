const fs = require("fs").promises;

async function getTextFiles() {
  // Existing code: Do not modify
  const files = await fs.readdir(".");

  // Add the necessary logic here to filter `.txt` files
}

getTextFiles().then(console.log).catch(console.error);
