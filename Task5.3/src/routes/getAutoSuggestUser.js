const db = require("../db/data").User;

const getAutoSuggestUser = (req, res) => {
    const loginSubStr = req.params.substr;
    const limit = req.params.limit;
    console.log(loginSubStr);
    let limitUser = db.filter((user) => {
        return user.login === loginSubStr && user.isDeleted === false;
    });
    limitUser = limitUser.slice(0, limit);
    res.send(limitUser);
};

module.exports = {
    getAutoSuggestUser,
};