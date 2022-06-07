const users = require("../db/data").User;
const Joi = require("joi");
const schema = Joi.object({
    id: Joi.number().integer().required(),
    login: Joi.string().required(),
    password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[0-9])")).required(),
    age: Joi.number().integer().min(4).max(130).required(),
    isDeleted: Joi.boolean().required(),
});
const updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = schema.validate(data);
    if (result.error) {
        res.statuscode = 400;
        return res.send(result.error );
    }
    else{
        const index = users.findIndex((e) => e.id == id);
        users[index] = data;
        res.statuscode = 200;
        let log=req.body.login
        res.send({ msg: "Updated Sucessfully..." });
    }
};

module.exports = {
    updateUser,
};