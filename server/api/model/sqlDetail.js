const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const { success ,err} = require("./utils");
const Detail = require("./Detail")(sequelize, DataTypes);  //详情表



class Detail {
    static async create(data){
        const has =  Detail.findOne({
            where:{
                detail_pic: data.detail_pic
            }
        })
        if(has){
            err("图片已存在");
        }
        await Detail.create(data);
        success("添加详情成功");
    }
}