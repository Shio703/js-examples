async function retryAsync(fn, retries) {
  if (typeof fn !== "function" || retries < 1) {
    throw new Error("Valid function and retry count required");
  }

  // Retry logic with async/await
  for (let i = 0; i < retries; i++) {
    try {
      console.log(i, "from", retries);
      return await fn();
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
    }
  }
}
// Example
retryAsync(() => fetch("https://example.co"), 3)
  .then(console.log)
  .catch(console.error);
