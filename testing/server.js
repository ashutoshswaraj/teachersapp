const express = require("express");
const mongoose = require("mongoose");
const teachercont = require("./controller/teachercontroller");
const classCont = require("./controller/classcontroller");
const connect = require("./config/db");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
app.use(express.json());
app.use("/", teachercont);
app.use("/", classCont);
var port_number = process.env.PORT || 5000;

app.listen(port_number, async function () {
  try {
    await connect();
    console.log("listen on port" + port_number);
  } catch (err) {
    console.log(err);
  }
});
