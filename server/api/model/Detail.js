//详情图片  


module.exports =  (sequelize,DataTypes) =>  sequelize.define('Detail',{
    // 型号 75557/632
    model:{
        type: DataTypes.STRING,
        allowNull: false
    },
    // 品牌  日本帝人/美国杜邦
    brand:{
        type: DataTypes.STRING,
        allowNull: false
    },
    //详情图片
    detail_pic:{
        type: DataTypes.STRING,
        allowNull: false
    },
    //详情图片排序
    detail_sort:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    timestamps: false // 禁止查询时间
  })

