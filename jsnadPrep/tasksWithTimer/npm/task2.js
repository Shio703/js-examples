// Task 2: Fetch API data using axios
// Problem: Install axios and fetch https://jsonplaceholder.typicode.com/posts/1.
//  Log the result.
const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res.data));
