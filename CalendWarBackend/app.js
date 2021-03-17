const express = require("express");
const app = express();

app.listen(3001, function () {
  console.log("Listening on port 3001");
});

app.get("/", function (req, res) {
  res.json({ serverOnline: true });
});

app.get("/history/:month/:day", function (req, res) {
  res.json({ work: "Yes" });
});
