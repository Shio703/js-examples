const { exec } = require("child_process");

function runCommand(command) {
  if (!command) throw new Error("Command is required");

  // Implement logic to run command and log output
}

// Example
runCommand("node -v");
