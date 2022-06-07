"use strict";

var db = require("../db/data").User;

var getAutoSuggestUser = function getAutoSuggestUser(req, res) {
  var loginSubStr = req.params.substr;
  var limit = req.params.limit;
  console.log(loginSubStr);
  var limitUser = db.filter(function (user) {
    return user.login === loginSubStr && user.isDeleted === false;
  });
  limitUser = limitUser.slice(0, limit);
  res.send(limitUser);
};

module.exports = {
  getAutoSuggestUser: getAutoSuggestUser
};