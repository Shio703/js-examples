async function fetchUserData(apiUrl) {
  // Existing code: Do not modify
  if (!apiUrl) {
    throw new Error("API URL is required.");
  }

  // Implement missing logic
  try {
    const resData = await fetch(apiUrl);
    const jsonifiedData = await resData.json();

    return jsonifiedData.map((user, index, array) => user.username);
  } catch (error) {
    throw error;
  }
}

// Example call
fetchUserData("https://jsonplaceholder.typicode.com/users")
  .then(console.log)
  .catch(console.error);
