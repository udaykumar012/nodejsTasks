//const users = require("../db/data").User;
//console.log(users)
const User=require("../db/UserModel").User
const getUser =async (req, res) => {
    const id = req.params.id;
    //const index = users.findIndex((e) => e.id == id);
    
    const data = await User.findOne({ where: { id: id } });
   // console.log(index)
    if(data==null)
        res.send({msg:"No User with id found"})
    else{
        res.statuscode = 200;
        res.send(data);
    }
};

module.exports = {
    getUser,
};