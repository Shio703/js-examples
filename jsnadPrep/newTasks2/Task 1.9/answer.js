const dns = require("dns");

function resolveDomain(domain) {
  if (!domain) throw new Error("Domain name is required");

  // Use dns.lookup or dns.promises
}

// Example
resolveDomain("example.com");
