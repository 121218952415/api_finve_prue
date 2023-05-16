const Store = require("../Models/store");

const createStore = async (req, res) => {
  try {
    const { store, location } = req.body;

    if (!store) {
      return res.status(400).json({ error: "Please provide a store name." });
    }

    if (!location) {
      return res.status(400).json({ error: "Please provide a location." });
    }

    const existeStore = await Store.findAll({ where: { store } });

    if (existeStore.length > 0) {
      return res.status(409).json({ error: "Store already exists." });
    }

    const newStore = await Store.create({ store, location });

    return res.status(201).json({ message: "Successfully created store." });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createStore };
