"use strict";

var users = require("../db/data").User;

var deleteUser = function deleteUser(req, res) {
  var id = req.params.id;
  var index = users.findIndex(function (e) {
    return e.id == id;
  });
  users[index].isDeleted = true;
  res.statuscode = 200;
  res.send({
    msg: "Deleted Sucessfully..."
  });
};

module.exports = {
  deleteUser: deleteUser
};