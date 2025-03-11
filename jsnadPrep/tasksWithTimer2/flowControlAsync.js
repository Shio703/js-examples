// 3. Control Flow with Asynchronous Execution
// Task:

// Write a function that reads three files (file1.txt, file2.txt, file3.txt)
// in order and prints their contents sequentially.
// Use callbacks, then modify the function to use Promises and async/await.
// Handle file read errors properly.

const fs = require("fs")

const myFunc = (files) => {
    files.map((file)=>{
        fs.readFile("./" + file, {encoding: "utf8"}, (err, data)=>{
            if (err) {
                console.error(err)
                process.exit(1);
            }else{
                console.log(data);
            }
        })
    })
}

myFunc(["file1.txt", "file2.txt", "file3.txt"]);

// you will get an error that fs is already declared so 
// first of all just comment fs import above. 
const fs = require("fs/promises");

const myFunc2 = (files) => {
  files.map(async (file) => {
    const fileContent = await fs.readFile("./" + file, { encoding: "utf8" });
    console.log(fileContent);
  });
};
myFunc2(["file1.txt", "file2.txt", "file3.txt"])

const myFunc3 = async (files) => {
  const results = await Promise.all(
    files.map((file) => fs.readFile("./" + file, {encoding: "utf8"}))
  );
  console.log(results);
  results.forEach((data)=> console.log(data));
};

myFunc3(["file1.txt", "file2.txt", "file3.txt"]);
