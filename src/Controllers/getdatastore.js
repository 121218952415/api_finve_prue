const Store = require("../Models/store");
const Product = require("../Models/products");
const getDataStore = async (req, res) => {
  try {
    const getDataStore = await Store.findAll({
      include: Product, // Incluir el modelo de Productos en la consulta
    });
    return res.status(201).json(getDataStore);
  } catch (err) {
    return res.status(500).json({  error: "Internal Server Error"  });
  }
};

module.exports = { getDataStore };
