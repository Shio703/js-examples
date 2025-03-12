const EventEmitter = require("events");
const fs = require("fs");

// const myEmitter = new EventEmitter();

// fs.readFile("./justAFile.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Data Read successuflly!");
//     myEmitter.emit("dataRead", data);
//   }
// });

// myEmitter.on("dataRead", (data) => {
//   console.log(data);
// });

// const { spawn, exec } = require("node:child_process");

// const ls = spawn("dir", ["/s"], { shell: true });

// ls.stderr.on("data", (data)=> console.error(data.toString()) )
// ls.on("error", (data)=> console.error(data) )
// ls.stdout.on("data", (data)=> console.log("spawn output:\n", data.toString()) )

// exec("dir /s", (error, stdout, stderr)=>{ 
//     if (error) {
//         console.error(error);
//     }else if (stderr) {
//         console.error(stderr);
//     }else {
//         console.log("exec output:\n", stdout);
//     }
//  });

 const buff = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
 console.log(buff.toString());

 const buff2 = Buffer.alloc(0);

 console.log( buff2 + buff.toString().toUpperCase());