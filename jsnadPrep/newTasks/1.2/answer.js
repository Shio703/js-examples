const fetch = require("node-fetch");

async function fetchMultipleURLs(urls) {
  // Existing code: Do not modify
  const responses = await Promise.all(urls.map((url) => fetch(url)));

  // Add the necessary code to process the responses and return the length of each response body
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
];

fetchMultipleURLs(urls).then(console.log).catch(console.error);
