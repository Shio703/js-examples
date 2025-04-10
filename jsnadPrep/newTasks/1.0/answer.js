const fs = require("fs").promises;

async function processFile() {
  // Existing code: Do not modify
  const inputFile = "input.txt";
  const outputFile = "output.txt";

  // Add the necessary steps here (read the file, modify content, write it)
  try {
    const fileContent = await fs.readFile(inputFile, { encoding: "utf-8" });
    // this way we can tranform the data into uppercase,
    // but better approach is to use streams for large files.
    const toUpper = fileContent.toUpperCase();

    await fs.writeFile(outputFile, toUpper);

    console.log("Output Written!");
  } catch (error) {
    throw error;
  }
}
processFile().catch(console.error);
