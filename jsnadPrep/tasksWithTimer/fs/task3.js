// Task 3: Delete a file safely
// Problem: Implement a function that deletes a file
// called deleteMe.txt, but only if it exists.
const fs = require('fs')

const deleter = () => {
   if (fs.existsSync("./deleteMe.txt")) {
      fs.unlink('./deleteMe.txt', (err) => {
        if (err) {
           return console.error(err);
        }
        console.log("File Deleted!");
        
      })
   }
};

deleter();