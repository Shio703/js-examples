async function fetchUserData() {
  // Existing code: Do not modify
  const url = "https://jsonplaceholder.typicode.com/users";

  // Add the missing logic here (fetch data, process the response)
  const data = await fetch(url);
  const toJson = await data.json();
  return toJson.map((user) => user.username);
}

fetchUserData().then(console.log).catch(console.error);
