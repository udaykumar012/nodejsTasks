"use strict";

var express = require('express');

var router = require("./routes/controller").router; //console.log(router)
//console.log(express);


var app = express();
app.use(express.json());
var PORT = process.env.PORT || 5000;
app.use("/User", router);
app.use("/*", function (req, res) {
  res.statusCode = 404;
  res.send({
    msg: "wrong Url..."
  });
});
app.listen(PORT, function (req, res) {
  console.log("Server is listening on port ".concat(PORT, " ... http://localhost:").concat(PORT, "/"));
});