const User = require("../Models/user");
const bcrypt = require("bcrypt");
const { ROUNDS } = process.env;

const newUser = async (req, res) => {
  const data = req.body;
  const password = bcrypt.hashSync(data.password, parseInt(ROUNDS));

  try {
    if (!data.name) {
      return res.status(400).json({ error: "Please provide a name." });
    }

    if (!data.password) {
      return res.status(400).json({ error: "Please provide a password." });
    }

    const existingUser = await User.findOne({ where: { email: data.email } });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }
      
    // Create new user
    const newUser = await User.create({ ...data, password });

    return res.status(201).json({ message: "Successfully created user." });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
  
};

module.exports = { newUser };
