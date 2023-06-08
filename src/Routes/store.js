const Router = require("express");
const router = Router();
const {createStore} = require("../Controllers/createStore");
const { getDataStore } = require("../Controllers/getdatastore");
const { verifyToken } = require("../Middlewares/verifyToken");

router.post("/Store",verifyToken,createStore);
router.get("/",getDataStore)

module.exports = router;