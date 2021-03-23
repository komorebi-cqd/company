// 所有的请求方法




const products = require("./product/index");

exports.queryAllKind = products.queryAllKind;  //查询所有分类
exports.pagingProduct = products.pagingProduct;  //分页查询产品
exports.queryOneProduct = products.queryOneProduct;  //查询单个产品
exports.queryAllProductId = products.queryAllProductId;  //查询所有产品ID
