const express = require("express");
const { exec } = require("node:child_process");
const fs = require("node:fs").promises;

const port = process.env.PORT || 7030;
const os = process.env.os;
const app = express();

app.use(express.static("./public"));

// const ls = async () => {
//   return await new Promise((resolve, reject) => {
//     exec(
//       `${os != "Windows_NT" ? "ls ./public" : "dir public"}`,
//       (error, stdout, stderr) => {
//         if (error) return reject(error.message);
//         if (stderr) return reject(stderr);
//         resolve(stdout);
//       }
//     );
//   });
// };

const ls = async () => {
  try {
    return await fs.readdir("public", { encoding: "utf-8" });
  } catch (error) {
    return error;
  }
};

app.get("/", async (req, res) => {
  res.set("Content-Type", "application/json");
  res.status(200).send(await ls());
});

app.listen(port, () => console.log(`Server is running on: ${port}`));
