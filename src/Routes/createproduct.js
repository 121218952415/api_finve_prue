const Router = require("express");
const { createProduct } = require("../Controllers/productCreate");
const router = Router();



router.post("/", createProduct);





module.exports = router;