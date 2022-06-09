//const users = require("../db/data").User;
const User=require("../db/UserModel").User
const Joi = require("joi");
const schema = Joi.object({
    id: Joi.number().integer().required(),
    login: Joi.string().required(),
    password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[0-9])")).required(),
    age: Joi.number().integer().min(4).max(130).required(),
    isDeleted: Joi.boolean().required(),
});
const updateUser = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = schema.validate(data);
    if (result.error) {
        res.statuscode = 400;
        return res.send(result.error );
    }
    else{
        
        // const index = users.findIndex((e) => e.id == id);
        // users[index] = data;
        const existuser= await User.findOne({ where: { id: id } });
        if(existuser!==null){
            let upadtedData = await User.update({ login: data.login, password: data.password, age: data.age }, {
                where: {
                    id: id
                }
            })
            res.statuscode = 200;
            
            res.send({ msg: "Updated Sucessfully...", UpdatedData:data});
        }
        else{
            res.send({ msg: `No User with id:${id} exist to Update data` });
        }
    }
};

module.exports = {
    updateUser,
};