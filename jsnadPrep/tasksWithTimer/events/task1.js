// Task 1: Create a simple event emitter
// Problem: Create an EventEmitter that:

// Emits an event "ready" after 2 seconds.
// Listens to "ready" and logs "System is ready"
const EventEmitter = require("node:events");

const MyEmitter = new EventEmitter();

setTimeout(() => MyEmitter.emit("ready"), 2000);

MyEmitter.on("ready", () => console.log("system is ready!"));
