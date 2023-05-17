const Router = require("express");
const store = require("./store");
const createproduct = require("./createproduct");
const users = require("./users");
const router = Router();
const newCart = require("./newcart");
const login = require("./auth")
router.use("/Store", store); //nueva  tienda
router.use("/createproduct", createproduct);
router.use("/users", users);
router.use("/neworder", newCart);
router.use("/auth",login)

module.exports = router;
