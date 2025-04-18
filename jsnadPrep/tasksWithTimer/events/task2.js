// Task 2: Handle multiple listeners
// Problem: Modify the previous emitter so that:

// One listener logs "Listener 1 received event".
// Another logs "Listener 2 received event".

const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on("for1", () => console.log("Listener 1 recieved an event!"));
myEmitter.on("for2", () => console.log("Listener 2 recieved an event!"));

myEmitter.emit("for2");
myEmitter.emit("for1");
