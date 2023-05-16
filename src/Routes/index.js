const Router = require("express");
const store = require("./store");
const createproduct = require("./createproduct");
const router = Router();

 router.use("/Store",store);//nueva  tienda 
 router.use("/createproduct",createproduct);

module.exports = router;
