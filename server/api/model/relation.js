// 关联表
const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Mainpic = require("./Mainpic")(sequelize, DataTypes);  // 主图表
const Product = require("./Product")(sequelize, DataTypes);   //产品表
const Detail = require("./Detail")(sequelize, DataTypes);  //详情表
const Prodkind = require("./Prodkind")(sequelize, DataTypes);  //产品一级分类
const Prodlevel = require("./Prodlevel")(sequelize, DataTypes);   //产品二级分类

// //产品和主图关联中间件
const ProdMains = sequelize.define("ProdMains", {
    ProductId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    },
    MainpicId: {
        type: DataTypes.INTEGER,
        references: {
            model: Mainpic,
            key: 'id'
        }
    }
}, {
    timestamps: false // 禁止查询时间
})

// //产品和详情关联中间件
const ProdDetails = sequelize.define("ProdDetails", {
    DetailId: {
        type: DataTypes.INTEGER,
        references: {
            model: Detail,
            key: 'id'
        }
    },
    ProductId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
}, {
    timestamps: false // 禁止查询时间
})

// //产品和详情关联
Product.belongsToMany(Mainpic, { through: 'ProdMains' });
Mainpic.belongsToMany(Product, { through: 'ProdMains' });
Product.belongsToMany(Detail, { through: 'ProdDetails' });
Detail.belongsToMany(Product, { through: 'ProdDetails' });


Prodkind.hasMany(Prodlevel);  //产品一级分类有多个二级
Prodlevel.belongsTo(Prodkind);  //多个二级属于一个一级分类


// sequelize.sync({ alter: true }).then(() => {
//     console.log("所有模型均已成功同步.");
// });

//添加主图

// for (let index = 0; index < 15; index++) {
//     (async function () {
//         await Mainpic.create({
//             model: "ABS",
//             brand: `${index}美国杜邦`,
//             main_pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2449092450,4079772953&fm=26&gp=0.jpg",
//             main_sort: "1",
//         });
//     })();
// }





// async function a() {
//     let mainImg = await Mainpic.findAll({ where: { id: [1,2,3,4] } });
//     const Products =await Product.create({
//         kind: "通用塑料",
//         title: "美国杜邦 ABS",
//         model: "ABS",
//         pattern:"34234",
//         brand: "美国杜邦",
//         stock: "88800",
//         price: "11.6",
//         feature:"防火 耐候",
//         detailText: "撒旦解放和卡斯放缓士大夫撒货到付款是",
//     });
//     console.log(await Products.setMainpics(mainImg))
// }
// a();



