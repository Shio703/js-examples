const EventEmitter = require("events");

class Notifier extends EventEmitter {
  // Implement the class
  constructor(msg) {
    super();
    this.msg = msg;
  }

  notify(msg) {
    this.emit("notify", msg);
  }
}

// Example
const n = new Notifier();
n.on("notify", (msg) => console.log("Got:", msg));
n.notify("Hello Event!");
