"use strict";

var express = require("express"); //console.log(express);


var getUser = require("../services/getUser").getUser;

var getAutoSuggestUser = require("../services/getAutoSuggestUser").getAutoSuggestUser;

var saveUser = require("../services/saveUser").saveUser;

var updateUser = require("../services/updateUser").updateUser;

var deleteUser = require("../services/deleteUser").deleteUser;

var router = express.Router(); //console.log(getUser)

router.get("/getUser/:id", getUser);
router.get("/getUser/:substr/:limit", getAutoSuggestUser);
router.post("/saveUser", saveUser);
router.put("/updateUser/:id", updateUser);
router["delete"]("/deleteUser/:id", deleteUser);
module.exports = {
  router: router
};