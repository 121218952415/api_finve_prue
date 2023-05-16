const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Store = sequelize.define(
  "Store",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    store: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

module.exports = Store;
