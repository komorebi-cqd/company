const { Router } = require("express");

//接口
const database = require("./controller/interface")
console.log("api index");
const router = Router();
router.use(database);
module.exports = router;