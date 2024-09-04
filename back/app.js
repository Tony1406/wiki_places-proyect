import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import placesRouter from "./routes/routes.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use("/api", placesRouter);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida con éxito.");

    // Crea las tablas basadas en los modelos definidos
    await sequelize.sync(); // O usa { force: true } si quieres sobrescribir tablas existentes.
    console.log("Tablas sincronizadas.");

    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
})();
