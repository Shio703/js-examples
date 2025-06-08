function delayedLoop(items, delayMs, callback) {
  if (!Array.isArray(items) || typeof callback !== "function") {
    throw new Error("Invalid arguments");
  }

  // Your code here
  items.forEach((item, index) => {
    setTimeout(() => {
      callback(item);
    }, delayMs * index);
  });
}

delayedLoop(["test", "test", "test"], 2000, console.log);
