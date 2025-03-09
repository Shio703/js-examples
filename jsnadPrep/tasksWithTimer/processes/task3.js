// Task 3: Spawn a child process to list files

// Problem: Write a script that:

// Uses child_process.spawn() to run ls (Linux/macOS) or dir (Windows).
// Logs the output.
const { spawn } = require("node:child_process");

const ls = spawn("dir", { shell: true });

ls.stderr.on("data", (err) =>
  console.log("error from stderr: ", err.toString())
);
ls.on("error", (error) => console.log("error: ", error));
ls.stdout.on("data", (data) => console.log("output data: ", data.toString()));
