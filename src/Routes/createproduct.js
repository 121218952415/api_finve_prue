const Router = require("express");
const { createProduct } = require("../Controllers/productCreate");
const { verifyAuth } = require("../Middlewares/verifyAuth");
const { verifyToken } = require("../Middlewares/verifyToken");
const router = Router();



router.post("/",verifyToken,verifyAuth, createProduct);


module.exports = router;