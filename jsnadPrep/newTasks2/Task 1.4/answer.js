function printEnvVar(varName) {
  if (!varName) throw new Error("Variable name is required");

  // Access and print process.env[varName]
  return console.log(process.env[varName]);
}

// Example
printEnvVar("PATH");
