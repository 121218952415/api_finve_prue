const Router = require("express");
const router = Router();
const {createStore} = require("../Controllers/createStore");
const { getDataStore } = require("../Controllers/getdatastore");
const { verifyAuth } = require("../Middlewares/verifyAuth");

router.post("/", verifyAuth,createStore);
router.get("/",getDataStore)

module.exports = router;