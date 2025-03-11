const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

require("dotenv").config();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Hello World!`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The Magic happens in port : ${port}`);
});
