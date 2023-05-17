const Router = require("express");
const { login } = require("../Controllers/newauth");
const router = Router();



router.post("/",login)





module.exports = router;