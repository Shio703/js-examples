// Task 1: Convert a callback function to a Promise

// Problem: Convert this callback-based function to return a Promise:

fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
