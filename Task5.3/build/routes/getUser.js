"use strict";

var users = require("../db/data").User; //console.log(users)


var getUser = function getUser(req, res) {
  var id = req.params.id;
  res.statuscode = 200;
  var index = users.findIndex(function (e) {
    return e.id == id;
  });
  res.send(users[index]);
};

module.exports = {
  getUser: getUser
};