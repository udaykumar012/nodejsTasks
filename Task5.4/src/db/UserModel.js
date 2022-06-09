const {  DataTypes, Model } = require('sequelize');
const sequelize=require('./db-connection').sequelize
class User extends Model {}
User.init( 
    {
    // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
        },
        login: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        age: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        isDeleted: {
            type: DataTypes.BOOLEAN
            // allowNull defaults to true
        },
    }, 
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User' ,// We need to choose the model name
        freezeTableName: true
    }
);
(async()=>{
    await User.sync({ force: true });
    const user1=await User.create(
        {
            id: "1",
            login: "Lokesh",
            password: "asdf0987",
            age: 22,
            isDeleted: false
          }
    )
    const user2=await User.create(
        {
            id: "2",
            login: "Ramesh",
            password: "123mnbv",
            age: 42,
            isDeleted: false
          }
    )
    const user3=await User.create(
        {
            id: "3",
            login: "Prasanth",
            password: "a1s2d3f4",
            age: 39,
            isDeleted: false
          }
    )
    const user4=await User.create(
        {
            id: "4",
            login: "Lokesh",
            password: "LOKI1234",
            age: 52,
            isDeleted: false
          }
    )
})();
module.exports={
    User,
}

