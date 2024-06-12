import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

import app from "./app.js";
import { sequelize } from "./database/database.js";
import { setupAssociations } from "./models/associations.js";

// Importar los modelos para que se registren en Sequelize
import "./models/clients.js";
import "./models/cp.js";
import "./models/seccionCotizar.js";
import "./models/tiposPlanes.js";
import "./models/countryCode.js";
import "./models/cpr.js";

// Configurar las asociaciones
setupAssociations();

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    // Sincronizar los modelos con la base de datos, sin forzar la recreación de tablas
    await sequelize.sync();

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log("Servidor en puerto", PORT);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
