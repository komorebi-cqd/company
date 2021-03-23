


const ProductMain = require("../../model/sqlProduct");


/**
 * 
 * @param {*} request 请求 
 * @param {*} response  响应
 * @param {*} next 
 */

//查询分类
exports.queryAllKind = (req, res, next) => {
    ProductMain.queryAllKind().then(data => {
        res.send(data);
    })
}
//分页查询
exports.pagingProduct = (req, res, next) => {
    let params = {};
    if(req.query.kind){
        params.levelId = req.query.kind;
    }
    if(req.query.wd){
        params.title = req.query.wd
    }
    const page = req.query.page;
    // console.log("分页查询",req.query)
    ProductMain.queryPagingProd(page,8,params).then(data => {
        res.send(data);
    })
}

//查询一个产品
exports.queryOneProduct = (req, res, next) => {
    const id = req.params.id;
    ProductMain.queryOneProduct(id).then(data => {
        res.send(data);
    })
}
exports.queryAllProductId = (req, res, next) => {
    ProductMain.queryAllProductId().then(data => {
        res.send(data);
    })
}






// sql.queryOneGoods("工程塑料").then(result => {
//     console.log(result);
// });

// sql.queryGoodsMain("日本帝人","POM").then(result => {
//     console.log(result);
// })


// exports. sql.queryDetailpic("日本帝人","POM").then(result => {
//     console.log(result);
// })


// sql.paging("日本帝人","POM",2,1).then(result => {
//         console.log(result);
// })