// Importaciones de las dependencias
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const routes = require("../Routes");
const sequelize = require("./db");
const { SECRET} = process.env;
// Crear la aplicación de Express
const app = express();

// Configuración de middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(session({
    secret: SECRET , // Cambia esto por una cadena secreta más segura
    resave: false,
    cookie: {
        maxAge: 30 * 60 * 1000, // Duración de 24 horas (en milisegundos)
      },
  }));
app.use(routes);



module.exports = app;
