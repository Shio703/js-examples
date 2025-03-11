// 2. Child Processes
// Task:

// Create a child process using child_process.spawn() to execute the ls (Linux/macOS) or dir (Windows) command.
// Capture and print the output to the console.
// Handle errors properly if the command fails.
// Bonus: Modify the function to accept a custom command as input.

const { spawn } = require("node:child_process");

const ls = spawn("dir", ["/a"], { shell: true });

ls.stderr.on("data", (data) => console.error(data.toString()));
ls.on("error", (err) => console.error(err));
ls.stdout.on("data", (data) => console.log(data.toString()));
ls.on("close", (code)=> console.log("Child Process exited with code: ", code));