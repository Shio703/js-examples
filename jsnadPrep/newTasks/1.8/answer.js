const fetch = require("node-fetch");

async function fetchUserData(apiUrl) {
  // Existing code: Do not modify
  if (!apiUrl) {
    throw new Error("API URL is required.");
  }

  // Implement missing logic
}

// Example call
fetchUserData("https://jsonplaceholder.typicode.com/users")
  .then(console.log)
  .catch(console.error);
