const http = require("http");

function fetchJsonFromUrl(url, callback) {
  if (typeof url !== "string" || typeof callback !== "function") {
    throw new Error("URL and callback required");
  }

  // Your code here
  http.get(url, (res) => {
    let response = "";

    res.on("data", (chunk) => {
      response += chunk;
    });
    res.on("end", () => {
      try {
        const parsedData = JSON.parse(response);

        callback(parsedData);
      } catch (error) {
        throw error;
      }
    });
  });
}

fetchJsonFromUrl("http://jsonplaceholder.typicode.com/posts/1", console.log);
