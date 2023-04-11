const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");
const env = require("dotenv");

//crear el servidor
env.config();
const app = express();

//conectar a la base de datos
conectarDB();

//habilitar cors
app.use(cors({origin: ["http://localhost:3001"]}));
app.use(morgan("dev"));

//Habilite express.json
app.use(express.json({ extended: true }));
app.use(express.static('public'));

const PORT = process.env.PORT || 3002;

//importar rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyectos", require("./routes/proyectos"));
app.use("/api/tareas", require("./routes/tareas"));

// arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT} `);
});
