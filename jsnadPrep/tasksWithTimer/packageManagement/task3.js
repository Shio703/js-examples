// Task 3: Use dotenv to load environment variables
// Problem: Install dotenv and use it to log an API_KEY from a .env file.
require("dotenv").config();
console.log(process.env.API_KEY);
