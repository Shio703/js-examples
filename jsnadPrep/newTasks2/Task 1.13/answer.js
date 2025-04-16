const EventEmitter = require("events");

class Notifier extends EventEmitter {
  // Implement the class
}

// Example
const n = new Notifier();
n.on("notify", (msg) => console.log("Got:", msg));
n.notify("Hello Event!");
