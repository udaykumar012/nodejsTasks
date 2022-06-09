//const users = require("../db/data").User;
const User=require("../Models/UserModel").User
const deleteUser =async  (req, res) => {
    const id = req.params.id;
    // const index = users.findIndex((e) => e.id == id);
    // users[index].isDeleted = true;
    const data= await User.findOne({ where: { id: id } });
    if (data === null) {
        res.send({msg:`user with id:${id} not existed`})
    }
    else{
        User.destroy({
            where: {
                id:id
            }
        })
        
        res.statuscode = 200;
        res.send({ msg: "Deleted Sucessfully...",data:data });
    }
};
module.exports = {
    deleteUser,
};