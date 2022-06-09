//const users = require("../db/data").User;
const User=require("../Models/UserModel").User
const Joi = require("joi");
const schema = Joi.object({
    id: Joi.number().integer().required(),
    login: Joi.string().required(),
    password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[0-9])")).required(),
    age: Joi.number().integer().min(4).max(130).required(),
    isDeleted: Joi.boolean().required(),
});
const saveUser = async (req, res) => {
    const data = req.body;
    const result = schema.validate(data);
    let id=data.id
    if (result.error) {
        res.statuscode = 400;
        return res.send(result.error);
    }else{
        
        //users.push(data);
        const existuser= await User.findOne({ where: { id: id } });
        if (existuser === null) {
            res.statuscode = 200;
            await User.sync();
            var newUser=await User.create(
                {
                    id: data.id,
                    login: data.login,
                    password: data.password,
                    age: data.age,
                    isDeleted: data.isDeleted
                }
            )
            res.send({ msg: "User Saved Sucessfully",NewUser: newUser });
                
        }
       else{
        res.send({msg:`user with id:${id} already existed `})
       }
    }
};

module.exports = {
    saveUser,
};