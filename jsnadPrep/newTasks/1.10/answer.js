const EventEmitter = require("events");

async function setupEmitter(eventName, delay) {
  // Existing code: Do not modify
  if (!eventName || typeof delay !== "number") {
    throw new Error("eventName and delay (ms) are required.");
  }

  const emitter = new EventEmitter();

  // Implement missing logic
  emitter.on(eventName, () => console.log("Event recieved"));

  setTimeout(() => {
    emitter.emit(eventName);
  }, delay);
}

// Example call
setupEmitter("testEvent", 1000);
