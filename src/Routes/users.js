const Router = require("express");
const { newUser } = require("../Controllers/newUsers");
const router = Router();


router.post("/Create",newUser)



module.exports = router;