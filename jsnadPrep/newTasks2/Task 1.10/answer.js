const { URL } = require("url");

function getHostnameFromUrl(url) {
  if (!url) throw new Error("URL is required");

  // Implement logic to extract hostname
  const myUrl = new URL(url);
  return myUrl.hostname;
}

// Example
console.log(getHostnameFromUrl("https://example.com/page?x=1")); // example.com
