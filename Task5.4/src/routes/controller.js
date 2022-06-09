const express=require("express")
//console.log(express);
const getUser=require("../services/getUser").getUser;
const getAutoSuggestUser =require("../services/getAutoSuggestUser").getAutoSuggestUser;
const saveUser=require("../services/saveUser").saveUser;
const updateUser=require("../services/updateUser").updateUser;
const deleteUser=require("../services/deleteUser").deleteUser;
const router = express.Router();
//console.log(getUser)
router.get("/getUser/:id", getUser);
router.get("/getUser/:substr/:limit", getAutoSuggestUser);
router.post("/saveUser",saveUser);
router.put( "/updateUser/:id",updateUser);
router.delete("/deleteUser/:id",deleteUser);
module.exports = {
    router,
};