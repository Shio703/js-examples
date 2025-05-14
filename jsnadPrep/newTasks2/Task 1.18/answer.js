const fs = require("fs").promises;

async function appendJsonToFile(filePath, data) {
  if (!filePath || typeof data !== "object") {
    throw new Error("Valid file path and data required");
  }

  // Read, update, write JSON array
  try {
    let arr = [];
    const fileContent = await fs.readFile(filePath);
    arr = JSON.parse(fileContent);

    arr.push(data);
    await fs.writeFile("modified.json", JSON.stringify(arr));
    
  } catch (error) {
    throw error;
  }
}

// Example
appendJsonToFile("data.json", { id: 2, name: "Test" });
