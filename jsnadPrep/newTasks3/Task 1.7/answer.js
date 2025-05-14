const { EventEmitter } = require("events");

function countListeners(emitter, eventName) {
  if (!(emitter instanceof EventEmitter)) {
    throw new Error("Must pass an EventEmitter instance");
  }

  // Your code here
}

countListeners(EventEmitter, "event");
