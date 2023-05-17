const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  items: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
    defaultValue: [],
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
});

module.exports = Cart;

const { Store, Product, User } = sequelize.models;

// relacion producto tienda
Product.belongsTo(Store, { foreignKey: "storeId" });
Store.hasMany(Product, { foreignKey: "storeId" });

//relacion carrito de compras y usuario
Product.belongsToMany(Cart, { through: "CartProduct" });
Cart.belongsToMany(Product, { through: "CartProduct" });

Store.hasMany(Cart);
Cart.belongsTo(Store);

User.hasMany(Cart);
Cart.belongsTo(User);
