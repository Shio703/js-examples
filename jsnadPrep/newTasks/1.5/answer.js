const EventEmitter = require("events");

async function setupEmitter() {
  // Existing code: Do not modify
  const emitter = new EventEmitter();

  // Add the async event listener here
  console.time("total time");
  emitter.on("test", () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("Event Recieved"));
        console.timeEnd("total time");
      }, 1000);
    });
  });

  setTimeout(() => {
    emitter.emit("test");
  }, 1000);
}

setupEmitter();
