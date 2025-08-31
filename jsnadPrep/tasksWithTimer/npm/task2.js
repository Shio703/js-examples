// Task 2: Fetch API data using axios
// Problem: Install axios and fetch https://jsonplaceholder.typicode.com/posts/1.
//  Log the result.

const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
  console.log(response.data);
});

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    name: "feria",
  })
  .then((res) => console.log(res.data));

// Fetch API example using async/await:
const fetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "feria" }),
  });
  return await res.json();
};
fetcher().then(console.log);

// this logs true. because request is instance of Object
console.log(Request instanceof Object);
