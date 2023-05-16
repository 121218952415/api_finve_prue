const Store = require("../Models/store");

const getDataStore = async (req,res) => {
  try {
   const getDataStore = await Store.findAll();
   return res.status(201).json(getDataStore);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


module.exports = {getDataStore};