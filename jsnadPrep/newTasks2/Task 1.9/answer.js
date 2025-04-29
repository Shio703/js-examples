const dns = require("dns");

function resolveDomain(domain) {
  if (!domain) throw new Error("Domain name is required");

  // Use dns.lookup or dns.promises
  dns.resolve(domain, 'A', (err, res) => {
    if (err) {
      return console.error(err);
    }
    console.log(res);
  });
  dns.lookup(domain, (err, res) => {
    if (err) {
      return console.error(err);
    }
    console.log('lookup:',res);
  });
}

// Example
resolveDomain("simple-api703.onrender.com");
