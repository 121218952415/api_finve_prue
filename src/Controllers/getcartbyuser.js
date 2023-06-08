const Cart = require("../Models/cart");
const User = require("../Models/user");
const Store = require("../Models/store");
const Product = require("../Models/products");



const getCartByUser = async (req, res) => {
    try {
      // Obtener el ID del usuario autenticado
      const userId = req.userId;
  
      // Verificar si el usuario existe
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Buscar el carrito de compras del usuario
      const cart = await Cart.findOne({
        where: { UserId: user.id },
        include: [User, Store, Product], // Opcional: incluir modelos relacionados si deseas obtener información adicional
      });
  
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
  
      return res.status(200).json({ cart });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

  module.exports = {
    getCartByUser,
  };