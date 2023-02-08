const express = require("express");
const dotenv = require("dotenv");
const Db = require("./connection/db");
dotenv.config();
Db();
const app = express();
port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
