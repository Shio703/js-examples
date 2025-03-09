// Task 1: Create a simple event emitter
// Problem: Create an EventEmitter that:

// Emits an event "ready" after 2 seconds.
// Listens to "ready" and logs "System is ready"

const evenEmitter = require("node:events");

const myEmitter = new evenEmitter();

setTimeout(() => {
  myEmitter.emit("ready");
}, 2000);

myEmitter.on("ready", () => console.log("System is ready!"));
