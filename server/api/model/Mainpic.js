//主图
module.exports = (sequelize,DataTypes) =>  sequelize.define('Mainpic',{
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
    //主图图片
    main_pic:{
        type: DataTypes.STRING,
        allowNull: false
    },
    //主图图片排序
    main_sort:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    timestamps: false // 禁止查询时间
  })

