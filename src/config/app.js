// Importaciones de las dependencias
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("../Routes");
const sequelize = require("./db");

// Crear la aplicación de Express
const app = express();

// Configuración de middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(routes);

const { Store, Product, Cart, User } = sequelize.models;
console.log(Store, Product, Cart, User);

// relacion producto tienda
Product.belongsTo(Store, { foreignKey: "storeId" });
Store.hasMany(Product, { foreignKey: "storeId" });

// //relacion carrito de compras y usuario
// Product.belongsToMany(Cart, { through: "CartProduct" });
// Cart.belongsToMany(Product, { through: "CartProduct" });

module.exports = app;
