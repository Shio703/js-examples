// 8. Streams
// Task:

// Create a readable stream from a large text file.
// Pipe it into a writable stream that converts all text to uppercase and saves it to a new file.
// Ensure efficient memory usage with highWaterMark
const fs = require("fs");

const readStream = fs.createReadStream("./bigfile.txt", { encoding: "utf-8", highWaterMark: 64 * (1024 * 1024) });
const writable = fs.createWriteStream("./neFile.txt", { encoding: "utf-8", highWaterMark: 64 * (1024 * 1024) });

readStream.on("error", (err) => console.log(err));
readStream.on("data", (data) => {
    writable.write(data.toUpperCase());
});

writable.on("error", (err)=> console.log(err))