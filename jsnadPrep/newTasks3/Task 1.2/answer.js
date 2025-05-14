function delayedLoop(items, delayMs, callback) {
  if (!Array.isArray(items) || typeof callback !== "function") {
    throw new Error("Invalid arguments");
  }

  // Your code here
}

delayedLoop(["test", "test", "test"], 703, console.log);
