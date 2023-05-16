const Product = require("../Models/products");
const Store = require("../Models/store");
const createProduct = async (req, res) => {
  const { price, name, img, storeId } = req.body;
  
  try {
    if (!name) {
      return res.status(400).json({ error: "Please provide a name" });
    }
    
    if (!price) {
      return res.status(400).json({ error: "Please provide a price" });
    }
    
    const existingProduct = await Product.findOne({ where: { name } });
    
    if (existingProduct) {
      return res.status(409).json({ error: "Product already exists" });
    }
    
    const store = await Store.findByPk(storeId);
    
    if (!store) {
      return res.status(404).json({ message: "Tienda no encontrada" });
    }
    
    const newProduct = await Product.create({ price, name, img, storeId });
    
    return res.status(201).json({ message: "Successfully created product." });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createProduct };
