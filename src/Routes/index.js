const Router = require("express");
const store = require("./store");
const createproduct = require("./createproduct");
const users = require("./users");
const router = Router();
const newCart = require("./newcart");
const login = require("./auth")
const logout = require("./logout")
router.use("/Store", store); //nueva  tienda
router.use("/createproduct", createproduct);
router.use("/users", users);
router.use("/neworder", newCart);
router.use("/auth",login)
router.use("/logout",logout)
module.exports = router;
