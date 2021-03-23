//商品
//产品

module.exports = (sequelize,DataTypes) =>  sequelize.define('Product',{
    // 塑料种类  工程塑料/通用塑料
    kind:{
        type: DataTypes.STRING,
        allowNull: false
    },
    // 标题  美国杜邦 7557
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // 型号 ABS / POM
    pattern:{
        type: DataTypes.STRING,
        allowNull: false
    },
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
    // 价格
    price:{
        type: DataTypes.STRING,
        allowNull: false
    },
    //库存
    stock:{
        type: DataTypes.STRING,
        defaultValue: "1000"
    },
    //排序
    sort:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    //详情文本
    detailText:{
        type: DataTypes.STRING,
        allowNull: true
    },
    // 特征  //防火
    feature:{
        type: DataTypes.STRING,
        allowNull: true
    },
    //分类ID
    levelId:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    
},{
    paranoid: true,
    createdAt: false
  })






