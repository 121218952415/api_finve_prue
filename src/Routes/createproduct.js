const Router = require("express");
const { createProduct } = require("../Controllers/productCreate");
const { verifyToken } = require("../Middlewares/verifyToken");
const router = Router();



router.post("/",verifyToken, createProduct);


module.exports = router;