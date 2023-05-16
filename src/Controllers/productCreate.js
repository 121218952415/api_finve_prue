const Product = require("../Models/products");
const Store = require("../Models/store");
const createProduct = async (req, res) => {
  const { price, name, img, storeId } = req.body;
  try {
    const exist = await Product.findAll({ where: { name: name } });
    if (!name) {
      return res.status(201).json({ error: "Please provide a name" });
    } else if (!price) {
      return res.status(201).json({ error: "Please provide a price" });
    } else if (exist.length > 0) {
      return res.status(201).json({ error: "Product already exists" });
    } else {
      // Verificar si la tienda existe
      const store = await Store.findByPk(storeId);
      if (!store) {
        return res.status(404).json({ message: "Tienda no encontrada" });
      }

      // Crear el producto
      const createProduct = await Product.create({
        price,
        name,
        img,
        storeId,
      });

      return res.status(201).json({ message: "Successfully created product." });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
module.exports = { createProduct };
