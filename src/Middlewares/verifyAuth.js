const verifyAuth = (req, res, next) => {
    // Verificar si la sesión está activa
    if (req.session.isLoggedIn) {
        console.log(req.headers);
        //pedir token y comparar
      // Si la sesión está activa, continuar con la siguiente función de middleware
      next();
    } else {
      // Si la sesión no está activa, redirigir a la página de inicio de sesión o devolver un error
      res.status(401).json({ message: "Acceso no autorizado" });
    }
  };

module.exports ={verifyAuth};