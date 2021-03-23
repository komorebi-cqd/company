
const { DataTypes, Op } = require('sequelize');
const sequelize = require('./db');
const { success, err, relation } = require("./utils");
const Mainpic = require("./Mainpic")(sequelize, DataTypes);  // 主图表
const Product = require("./Product")(sequelize, DataTypes);   //产品表
const Detail = require("./Detail")(sequelize, DataTypes);  //详情表
const Prodkind = require("./Prodkind")(sequelize, DataTypes);  //产品一级分类
const Prodlevel = require("./Prodlevel")(sequelize, DataTypes);   //产品二级分类

Product.belongsToMany(Mainpic, { through: 'ProdMains' });
Mainpic.belongsToMany(Product, { through: 'ProdMains' });
Product.belongsToMany(Detail, { through: 'ProdDetails' });
Detail.belongsToMany(Product, { through: 'ProdDetails' });

Prodkind.hasMany(Prodlevel);  //产品一级分类有多个二级
Prodlevel.belongsTo(Prodkind);  //多个二级属于一个一级分类

class ProductMain {
    //1.创建产品 2.关联主图和详情
    static async create(data) {
        const { mainIds, detailIds, ...parameter } = data;
        //查找有没有这个产品
        const hasProduct = await Product.findOne({
            where: {
                title: parameter.title
            }
        })
        if (hasProduct) {
            const msg = "产品名重复";
            return err(msg);
        }
        //创建产品模型
        const Products = await Product.create(parameter);
        //关联主图和详情图
        relation(Products, Mainpic, Detail, mainIds, detailIds, "成功添加产品！");
    }
    //删除产品
    static async delete(title) {
        //判断有没有这个产品
        const has = await Product.findOne({
            where: {
                title,
            }
        })
        if (!has) {
            return err("没有这个产品。")
        }
        const delProd = await Product.destroy({
            where: {
                title,
            }
        })
        const msg = `删除了${delProd}个产品`;
        return success(msg);
    }
    //修改产品
    static async update(id, data) {
        const { mainIds, detailIds, ...parameter } = data;
        const products = await Product.findByPk(id);
        if (!products) {
            return err("没有找到这个产品。");
        }
        const has = await Product.findOne({
            where: {
                title: parameter.title
            }
        })
        if (has) {
            return err("产品名重复");
        }
        products.update(parameter);
        relation(products, Mainpic, Detail, mainIds, detailIds, "成功更新产品！");
    }
    //查询单个产品
    static async queryOneProduct(id) {
        const oneProd = await Product.findOne({
            where: {
                id
            },
            include: [
                { model: Mainpic },
                { model: Detail }
            ],
        });
        if (!oneProd) {
            return err("没有这个产品。");
        }
        return success("成功", {
            datas: JSON.parse(JSON.stringify(oneProd))
        })
    }
    //分页查询
    static async queryPagingProd(page = 1, limit = 8, data) {
        if (page == undefined) {
            page = 1
        }
        let where = {};
        if (data.title) {
            where.title = {
                [Op.like]: '%' + data.title + '%',
            }
        } else {
            where = { ...data };
        }
        const { count, rows } = await Product.findAndCountAll({
            where,
            include: [{
                model: Mainpic,
            }],
            offset: (page - 1) * limit,
            limit,
            distinct: true
        })
        return success("成功", {
            total: count,
            datas: JSON.parse(JSON.stringify(rows))
        })
    }
    //查询分类
    static async queryAllKind() {
        const allKind = await Prodkind.findAll({
            include: [{
                model: Prodlevel
            }]
        })
        return success("成功", {
            datas: JSON.parse(JSON.stringify(allKind))
        })
    }
    static async queryAllProductId() {
        const productId = await Product.findAll({ attributes: ["id"] });
        return success("成功", {
            datas: JSON.parse(JSON.stringify(productId))
        })
    }
}


// ProductMain.queryAllProductId().then(r => {
//     console.log(r.data.datas.map(product => {
//         return '/products/' + product.id
//       }));
// })


// ProductMain.queryPagingProd(2,8,{title:"日本东丽"}).then(r => {
//     console.log(r);
// })


// ProductMain.queryOneProduct(27).then(r => {
//     console.log(r);
// })









module.exports = ProductMain;
