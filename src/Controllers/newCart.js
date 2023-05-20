const Cart = require("../Models/cart");
const User = require("../Models/user");
const Store = require("../Models/store");
const Product = require("../Models/products");

const addToCart = async (req, res) => {
  try {
    const userId = req.session.user.id;
    console.log(userId ,";;;;")
    const { storeId, items, totalQty, totalPrice } = req.body;
    
    // Verificar si el usuario existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Verificar si la tienda existe
    const store = await Store.findByPk(storeId);
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    // Crear el carrito de compras
    const cart = await Cart.create({
      items,
      totalQty,
      totalPrice,
      UserId: user.id,
      StoreId: store.id,
    });
    // Asociar el carrito de compras al usuario
    await user.addCart(cart);
    // Obtener los productos a partir de los IDs en items
    const products = await Product.findAll({
      where: { id: items.map((item) => item.productId) },
    });

    // Asociar los productos al carrito de compras
    await cart.addProducts(products, {
      through: { quantity: items.map((item) => item.quantity) },
    });

    return res.status(201).json({ message: "Cart created", cart });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addToCart,
};
