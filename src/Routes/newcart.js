const Router = require("express");
const { addToCart } = require("../Controllers/newCart");
const router = Router();



router.post("/",addToCart)





module.exports = router;