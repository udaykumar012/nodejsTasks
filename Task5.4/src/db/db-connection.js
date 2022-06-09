const { Sequelize} = require('sequelize');
const sequelize = new Sequelize(
    'User_db',//database
    'postgres',//'username',
    'UdaY1234', //password
    {
        host: 'localhost',
        dialect: 'postgres'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
   }
  
);
module.exports={
    sequelize,
}