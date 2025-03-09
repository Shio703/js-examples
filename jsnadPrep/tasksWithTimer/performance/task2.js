// Task 2: Improve slow code with caching
// Problem: Optimize this:

function getData() {
  console.log("Fetching...");
  return Math.random();
}
console.log(getData());
console.log(getData()); // Fetches again (not optimized)
// Modify it so the result is cached and only computed once.
