// Task 2: Improve slow code with caching
// Problem: Optimize this:
const memo = [];

function getData() {
  console.log("Fetching...");
  const number = Math.random();
  number = memo[number];
}
console.log(getData());
console.log(getData()); // Fetches again (not optimized)
// Modify it so the result is cached and only computed once.
