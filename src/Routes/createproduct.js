const Router = require("express");
const { createProduct } = require("../Controllers/productCreate");
const { verifyAuth } = require("../Middlewares/verifyAuth");
const router = Router();



router.post("/",verifyAuth, createProduct);


module.exports = router;