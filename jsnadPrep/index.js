const fs = require("fs");
const { exec } = require("node:child_process");
// reading files asyncronously

fs.readFile("./input.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("error reading the file:", err);
    process.exit(1);
  }
  console.log("data:", data);
});

debugger;
const testVar = "oo sheesh it works:)";

// child processes:
const childProcess = require("node:child_process");

const ls = childProcess.spawn("dir", ["/s"], {
  cwd: process.cwd(),
  shell: true,
});
ls.stdout.on("data", (data) => {
  console.log(data.toString());
});
ls.stderr.on("data", (err) => {
  console.log(err);
  process.exit(1);
});
ls.on("error", (error) => {
  console.log(error);
  process.exit(1);
});

// child processes exec()
const execLs = exec("dir /s");

execLs.stdout.on("data", (data) => {
  console.log("exec data: ", data);
});
execLs.stderr.on("data", (err) => {
  console.log("exec stderr: ", err);
  process.exit(1);
});
execLs.on("error", (error) => {
  console.log("exec command error code: ", error.code, "\n", error);
  process.exit(1);
});

// exec callback approach:
const execFunc = exec("dir", (error, stdout, stderr) => {
  if (error) {
    console.log(
      "error in exec(): ",
      error,
      "\n",
      `exited with code: ${error.code}`
    );
    //  i used process.exit( code ) but it is not neccessary when node js exits process itself when it sees an error
    process.exit(1);
  } else if (stderr) {
    console.log(
      "error trough stderr: ",
      stderr,
      "\n",
      `exited with code: ${error.code}`
    );
    process.exit(1);
  } else {
    console.log("data trough stdout: ", stdout, "\n", "exited with code: 0 ");
  }
});

// execSync example:
// syncronous code will be executed firstly and then asyncronous!!!
//  also this method returns buffer by default!
try {
  const execSyncLs = childProcess.execSync("dir /s");
  console.log("execSync data: ", execSyncLs.toString());
} catch (error) {
  console.log("error in execSync: ", error, "\n", process.exitCode);
}

// spawnSync example:
// DIFFERENCE BETWEEN ERROR && STDERR:
// error comes from node js runtime itself
//  for eg. if command is typed wrong and node js will trow an error with reason:
//  command not found!
const spawnSync = childProcess.spawnSync("dir", ["/s"], {
  shell: true,
  encoding: "utf8",
});
if (spawnSync.error) {
  console.error("error: ", spawnSync.error);
  process.exit(1);
} else if (spawnSync.stderr) {
  console.log(
    "error trough stderr during execution of the command: ",
    spawnSync.stderr
  );
}

console.log("spawnSync data:", spawnSync.stdout);
