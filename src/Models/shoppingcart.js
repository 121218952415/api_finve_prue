const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  items: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: {},
  },
  totalQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
},{
    timestamps: true,
  });


  module.exports = Cart ; 