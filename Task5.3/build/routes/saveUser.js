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

var saveUser = function saveUser(req, res) {
  var data = req.body;
  var result = schema.validate(data);

  if (result.error) {
    res.statuscode = 400;
    return res.send(result.error);
  } else {
    users.push(data);
    res.statuscode = 200;
    res.send({
      msg: "User Saved Sucessfully"
    });
  }
};

module.exports = {
  saveUser: saveUser
};