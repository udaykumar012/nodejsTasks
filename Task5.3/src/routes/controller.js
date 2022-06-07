const express=require("express")
//console.log(express);
const getUser=require("./getUser").getUser;
const getAutoSuggestUser =require("./getAutoSuggestUser").getAutoSuggestUser;
const saveUser=require("./saveUser").saveUser;
const updateUser=require("./updateUser").updateUser;
const deleteUser=require("./deleteUser").deleteUser;
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