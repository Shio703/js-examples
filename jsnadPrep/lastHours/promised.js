const fs = require("fs/promises");

console.log("fisrt log");
try {
    async function reader() {
        const fileCont = await fs.readFile("./justAFile.txt",{encoding:"utf-8"});
        console.log(fileCont);
        console.log("second log");
    }
    reader();
} catch (error) {
    console.error(error)
}
console.log("last log");

// output will be:
// first log
// last log
// (file content)
// second log.