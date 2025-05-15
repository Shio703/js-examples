const { EventEmitter } = require("events");

function trackEvent(emitter, eventName, handler) {
  // Your code here
}

trackEvent(EventEmitter, "event", () => console.log("event fired!"));
