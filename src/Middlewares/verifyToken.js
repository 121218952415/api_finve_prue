
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
    const {SECRETKEY} = process.env;
    // Verificar el token y decodificar el payload
    const decoded = jwt.verify(token, SECRETKEY);

    // if (decoded.role !== 'admin') {
    //     // Si el rol no es 'admin', retornar una respuesta de error
    //     return res.status(403).json({ error: "Access denied. Requires admin role." });
    //   } 
    
    // Agregar el id del usuario decodificado a la petición
    req.userId = decoded.userId;

    // Llamar al siguiente middleware
    next();
  } catch (error) {
    // Si hay algún error, se retorna una respuesta de error
    console.log(error)
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