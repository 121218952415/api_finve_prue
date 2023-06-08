const jwt = require("jsonwebtoken");

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
  try {
    // Obtener el token de la cabecera Authorization
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      // Si no hay token, se retorna una respuesta de error
      return res.status(401).json({ error: "No token provided" });
    }
    const { SECRETKEY } = process.env;
    // Verificar el token y decodificar el payload
    const decoded = jwt.verify(token, SECRETKEY);

    
    req.userId = decoded.userId;
    req.isAdmin = decoded.isAdmin; // Agregar la propiedad isAdmin al request

    if (req.isAdmin) {
      // Si el usuario es administrador, permitir acceso a todas las rutas
      next();
    } else {
      // Si el usuario no es administrador, bloquear acceso a rutas de admin
      if (req.originalUrl.startsWith('/admin')) {
        return res.status(403).json({ error: "Access denied. Requires admin role." });
      }
      next();
    }
  } catch (error) {
    // Si hay algún error, se retorna una respuesta de error
    console.log(error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = { verifyToken };

// let adversario  = "loki"
//  let defaul = "tanos "

// para en caso de if y else

// const defaul_disfras = {
//   "iron_man" : "magneto" ,
//   thor : "odin",
//   hult : "tanos",
//   lobezno : "flash"
// }
// const  vs_vs = defaul_disfras[adversario] || defaul
