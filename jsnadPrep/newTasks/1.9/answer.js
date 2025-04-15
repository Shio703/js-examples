async function fetchMultipleURLs(urls) {
  // Existing code: Do not modify
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error("An array of URLs is required.");
  }

  // Implement missing logic
  return Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      const parsed = await response.json();
      return parsed.body.length;
    })
  );
}

// Example call
fetchMultipleURLs([
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
])
  .then(console.log)
  .catch(console.error);
