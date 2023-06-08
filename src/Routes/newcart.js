const Router = require("express");
const { addToCart } = require("../Controllers/newCart");
const { verifyToken } = require("../Middlewares/verifyToken");
const router = Router();



router.post("/",verifyToken,addToCart)





module.exports = router;