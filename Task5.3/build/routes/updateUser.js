"use strict";

var users = require("../db/data").User;

var Joi = require("joi");

var schema = Joi.object({
  id: Joi.number().integer().required(),
  login: Joi.string().required(),
  password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[0-9])")).required(),
  age: Joi.number().integer().min(4).max(130).required(),
  isDeleted: Joi["boolean"]().required()
});

var updateUser = function updateUser(req, res) {
  var id = req.params.id;
  var data = req.body;
  var result = schema.validate(data);

  if (result.error) {
    res.statuscode = 400;
    return res.send(result.error);
  } else {
    var index = users.findIndex(function (e) {
      return e.id == id;
    });
    users[index] = data;
    res.statuscode = 200;
    var log = req.body.login;
    res.send({
      msg: "Updated Sucessfully..."
    });
  }
};

module.exports = {
  updateUser: updateUser
};