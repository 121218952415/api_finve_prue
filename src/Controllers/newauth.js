const bcrypt = require("bcrypt");
const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { SECRETKEY, EXPIRES } = process.env;

  // Obtener las credenciales de inicio de sesión del cuerpo de la solicitud
  const { email, password } = req.body;

  try {
    // Buscar el usuario en la base de datos basándose en el nombre de usuario
    const user = await User.findOne({ where: { email: email } });
    // Verificar si el usuario existe
    if (!user) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    // Comparar la contraseña encriptada con la contraseña proporcionada
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Verificar si las contraseñas coinciden
    if (passwordMatch) {
      // Si las contraseñas coinciden, establecer una sesión

      req.session.isLoggedIn = true;
      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      //crear token
      const token = jwt.sign(
        {
          email: req.session.user.email,
          username: req.session.user.name,
          userId: req.session.user.id,
        },
        SECRETKEY,
        { expiresIn: EXPIRES }
      );
      return res
        .status(200)
        .json({ message: `login successful${user.name}`, token });
    } else {
      // Si las contraseñas no coinciden, devolver un error
      return res.status(401).json({ message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  login,
};
