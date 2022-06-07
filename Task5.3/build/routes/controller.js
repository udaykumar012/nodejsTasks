"use strict";

var express = require("express"); //console.log(express);


var getUser = require("./getUser").getUser;

var getAutoSuggestUser = require("./getAutoSuggestUser").getAutoSuggestUser;

var saveUser = require("./saveUser").saveUser;

var updateUser = require("./updateUser").updateUser;

var deleteUser = require("./deleteUser").deleteUser;

var router = express.Router(); //console.log(getUser)

router.get("/getUser/:id", getUser);
router.get("/getUser/:substr/:limit", getAutoSuggestUser);
router.post("/saveUser", saveUser);
router.put("/updateUser/:id", updateUser);
router["delete"]("/deleteUser/:id", deleteUser);
module.exports = {
  router: router
};