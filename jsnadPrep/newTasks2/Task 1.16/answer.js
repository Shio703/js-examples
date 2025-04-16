async function retryAsync(fn, retries) {
  if (typeof fn !== "function" || retries < 1) {
    throw new Error("Valid function and retry count required");
  }

  // Retry logic with async/await
}

// Example
retryAsync(() => fetch("http://..."), 3).then(console.log);
