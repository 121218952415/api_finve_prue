const Store = require("../Models/store");

const createStore = async (req, res) => {
  try {
    const { store, location } = req.body;
    const existeStore = await Store.findAll({ where: { store: store } });
    if (!store) {
      return res.status(400).json({ error: "Please provide a store name." });
    } else if (!location) {
      return res.status(400).json({ error: "Please provide a location." });
    } else if (existeStore.length > 0) {
      return res.status(409).json({ error: "Store already exists." });
    } else {
      const newStore = await Store.create({ store, location });
      return res.status(201).json({ message: "Successfully created store." });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message }); // Cambié el estado de respuesta a 500 para errores internos del servidor
  }
};

module.exports = { createStore };
