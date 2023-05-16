const Router = require("express");
const router = Router();
const {createStore} = require("../Controllers/createStore");
const { getDataStore } = require("../Controllers/getdatastore");

router.post("/", createStore);
router.get("/",getDataStore)

module.exports = router;