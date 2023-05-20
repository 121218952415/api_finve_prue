const Router = require("express");
const { addToCart } = require("../Controllers/newCart");
const { verifyAuth } = require("../Middlewares/verifyAuth");
const { verifyToken } = require("../Middlewares/verifyToken");
const router = Router();



router.post("/",verifyToken,verifyAuth,addToCart)





module.exports = router;