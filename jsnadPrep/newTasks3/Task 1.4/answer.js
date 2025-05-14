const http = require("http");

function fetchJsonFromUrl(url, callback) {
  if (typeof url !== "string" || typeof callback !== "function") {
    throw new Error("URL and callback required");
  }

  // Your code here
}

fetchJsonFromUrl("example.com", console.log);
