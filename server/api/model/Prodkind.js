// 产品种类
module.exports = (sequelize,DataTypes) =>  sequelize.define('Prodkind',{
    //种类 
    kind:{
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

