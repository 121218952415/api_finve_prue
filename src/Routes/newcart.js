const Router = require("express");
const { addToCart } = require("../Controllers/newCart");
const { verifyAuth } = require("../Middlewares/verifyAuth");
const router = Router();



router.post("/",verifyAuth,addToCart)





module.exports = router;