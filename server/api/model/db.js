const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('company','root','123',{
    host: 'localhost',
    dialect: 'mysql',
    logging: null,
    define: {
        timestamps: false
    },
})


module.exports = sequelize;

























// 测试连接
// async function test(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// };
// test();



