// 5. Events
// Task:

// Create an EventEmitter instance.
// Register two listeners for an event called "dataProcessed".
// One listener should log "Processing Complete!".
// The other should log "Data successfully saved!".
// Emit "dataProcessed" three times and ensure both listeners respond each time.

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("dataProcessed", () => console.log("Data successfully saved!"));
myEmitter.on("dataProcessed", ()=> console.log("Processing Complete!"));

myEmitter.emit("dataProcessed");
myEmitter.emit("dataProcessed");
myEmitter.emit("dataProcessed");