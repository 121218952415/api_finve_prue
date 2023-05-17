const bcrypt = require("bcrypt");
const User = require("../Models/user");

const login = async (req, res) => {
  // Obtener las credenciales de inicio de sesión del cuerpo de la solicitud
  const { email, password } = req.body;

  try {
    // Buscar el usuario en la base de datos basándose en el nombre de usuario
    const user = await User.findOne({ where: { email : email} });
    // Verificar si el usuario existe
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Comparar la contraseña encriptada con la contraseña proporcionada
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Verificar si las contraseñas coinciden
    if (passwordMatch) {
      // Si las contraseñas coinciden, establecer una sesión
      req.session.isLoggedIn = true;
      req.session.username = email;
      //crear token

      return res.status(200).json({ message: "Inicio de sesión exitoso" });
    } else {
      // Si las contraseñas no coinciden, devolver un error
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
};
