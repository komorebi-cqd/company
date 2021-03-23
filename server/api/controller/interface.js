//管理请求


const { Router } = require("express");
const router = Router();
const myrouter = require("./router");

router.get("/kindAll",myrouter.queryAllKind);  //请求产品分类
router.get("/products",myrouter.pagingProduct);  //请求分页产品
router.get("/products/:id",myrouter.queryOneProduct);  //请求一个产品产品
router.get("/products/allId",myrouter.queryAllProductId);  //请求所有产品id

module.exports = router;
