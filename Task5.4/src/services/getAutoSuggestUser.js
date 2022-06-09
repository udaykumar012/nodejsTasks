//const db = require("../db/data").User;
const User=require("../Models/UserModel").User
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const getAutoSuggestUser = async (req, res) => {
    const loginSubStr = req.params.substr;
    const limit = req.params.limit;
    console.log(loginSubStr);
    let limitUser = await User.findAll({
        limit: limit,
        where: {
          login: {
            [Op.like]: '%'+ loginSubStr +'%'
          }
        }
      })
    res.send(limitUser);
};

module.exports = {
    getAutoSuggestUser,
};