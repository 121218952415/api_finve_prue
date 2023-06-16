const User = require("../Models/user");
const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const { ROUNDS } = process.env;

const newUser = async (req, res) => {
  const data = req.body;
  try {
    const schema = Joi.object({
      name: Joi.string().min(6).max(30).required(),
      password: Joi.string()
        // .pattern(
        //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>|\[\]\\\\'"\/?]).{8,}$/
        // )
        .min(6)
        .required(),
      email: Joi.string().email().required(),
    });

    const { error, value } = schema.validate(data);

    if (error) {
      console.log(error.details);
      return res.status(400).json({ error:error.details[0].message });
    }

    // Acceder a los datos validados
    const { name, password, email } = value;
    const hashedPassword = bcrypt.hashSync(password, parseInt(ROUNDS));
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    // Create new user
    const newUser = await User.create({
      name: name,
      password: hashedPassword,
      email: email,
    });

    return res.status(201).json({ message: "Successfully created user." });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { newUser };
