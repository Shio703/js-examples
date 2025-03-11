// 7. Process Management
// Task:

// Write a script that logs process memory usage (process.memoryUsage()).
// It should update the log every 2 seconds.
// If memory usage exceeds 100MB, the script should exit automatically.

// setInterval(() => {
//   const inMb = (process.memoryUsage().heapUsed / 1024) * 1024;
//   console.log(inMb.toFixed());
// }, 2000);

function bitesToMb(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

setInterval(() => {
  const result = bitesToMb(process.memoryUsage().heapUsed);
  if (result > 100) {
    console.log("memory usage exceed 100!");
    process.exit(1);
  }
  console.log(result);
}, 2000);
