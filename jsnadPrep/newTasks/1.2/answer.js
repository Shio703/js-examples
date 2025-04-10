async function fetchMultipleURLs(urls) {
  // Existing code: Do not modify
  const responses = await Promise.all(urls.map((url) => fetch(url)));

  // Add the necessary code to process the responses and return the length of each response body
  const parsed = await Promise.all(
    responses.map(async (response) => await response.json())
  );
  return parsed.map((post) => post.body.length);
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
];
// it logs an array if you want to log just each length either you should log it inside a map method or
// map and log inside the then() method.
fetchMultipleURLs(urls).then(console.log).catch(console.error);
