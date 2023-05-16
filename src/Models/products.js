const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Store = require("../Models/store");
const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  img: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  storeId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: Store, // Nombre del modelo de referencia
      key: "id", // Nombre de la columna de referencia
    },
  },
});

module.exports = Product;
