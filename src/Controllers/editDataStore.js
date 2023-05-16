const Store = require("../Models/store");

const editDataStore = async (res, req) => {
    const {id} = req.params; 
    const {store, location } = req.body;
  try {
    
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
