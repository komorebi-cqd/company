//产品二级分类


module.exports = (sequelize,DataTypes) =>  sequelize.define('Prodlevel',{
    //种类 
    classify:{
        type: DataTypes.STRING,
        allowNull: false
    },
    //排序
    main_sort:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    // timestamps: false // 禁止查询时间
    paranoid: true
  })

