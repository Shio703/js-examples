const { exec } = require("child_process");

function runCommand(command) {
  if (!command) throw new Error("Command is required");

  // Implement logic to run command and log output
  exec(command, (err, stdout, stderr) => {
    if (err) {
      return console.error(err);
    }
    if (stderr) {
      return console.error(stderr);
    }
    console.log(stdout);
  });
}

// Example
runCommand("node -v");
