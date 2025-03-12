// 9. Timers
// Task:

// Create a function that logs "Tick!" every 1 second using setInterval().
// After 5 ticks, stop the interval using clearInterval().
// Before stopping, log "Timer stopped!".

const myTicker = () => {
  let ticks = 1;
  const ticker = setInterval(() => {
    if (ticks === 5) {
      clearInterval(ticker);
    }
    console.log("tick!");
    console.log(ticks);
    ticks++;
  }, 1000);
};
myTicker();
