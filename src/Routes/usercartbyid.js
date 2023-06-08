const Router = require("express");

const { verifyToken } = require("../Middlewares/verifyToken");
const { getCartByUser } = require("../Controllers/getcartbyuser");
const router = Router();



router.get("/",verifyToken,getCartByUser)





module.exports = router;