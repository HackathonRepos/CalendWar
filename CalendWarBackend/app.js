const express = require("express");
const cors = require("cors");
const app = express();

const axios = require("axios");

app.use(cors());

app.listen(3001, function () {
  console.log("Listening on port 3001");
});

app.get("/api", function (req, res) {
  res.json({ serverOnline: true });
});

app.get("/api/history/:month/:day", function (req, res) {
  axios
    .get(
      `http://history.muffinlabs.com/date/${req.params.month}/${req.params.day}`
    )
    .then((results) => res.json({ historyData: results["data"] }))
    .catch((err) => res.json({ error: err }));
});
