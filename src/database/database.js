import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

// Configuración de la base de datos usando variables de entorno
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT, // Aquí se especifica el dialecto
    dialectOptions: {
      ssl: {
        require: true, // Esto habilita SSL
        rejectUnauthorized: false, // Esto desactiva la verificación del certificado
      },
    },
  }
);
