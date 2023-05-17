const Router = require("express");
const { logout } = require("../Middlewares/logoutend");
const router = Router();



router.get("/",logout);


module.exports = router;