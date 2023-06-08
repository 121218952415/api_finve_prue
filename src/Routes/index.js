const Router = require("express");
const store = require("./store");
const createproduct = require("./createproduct");
const users = require("./users");
const router = Router();
const newCart = require("./newcart");
const login = require("./auth");
const logout = require("./logout");
const usercartbyid = require("./usercartbyid");
router.use("/admin", store); //nueva  tienda
router.use("/createproduct", createproduct);
router.use("/users", users);
router.use("/neworder", newCart);
router.use("/auth", login);
router.use("/logout", logout);
router.use("/getcartuserbyid",usercartbyid)
module.exports = router;
