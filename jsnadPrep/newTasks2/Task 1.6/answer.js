function logMessageAfterDelay(message, delay) {
  if (!message || typeof delay !== "number") {
    throw new Error("Both message and delay are required");
  }

  // Implement delay logic
}

// Example
logMessageAfterDelay("Hello after 2 seconds!", 2000);
