const EventEmitter = require("events");

async function setupEmitter() {
  // Existing code: Do not modify
  const emitter = new EventEmitter();

  // You need to add the listener and event emitting logic here
  console.time("total time");
  
  emitter.on("event", (arg) => {
    setTimeout(() => {
      console.log("arguments: ", arg);
      console.timeEnd("total time");
    }, 1000);
  });

  setTimeout(() => {
    emitter.emit("event", "test arg");
  }, 1000);
}

setupEmitter();
