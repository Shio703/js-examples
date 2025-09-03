// Task 3: Spawn a child process to list files

// Problem: Write a script that:

// Uses child_process.spawn() to run ls (Linux/macOS) or dir (Windows).
// Logs the output.

const { spawn } = require("child_process");

const ls = spawn("dir", ["."]);
ls.stderr.on("data", console.error);
ls.on("error", console.error);
ls.stdout.on("data", (data) => console.log(data.toString()));
