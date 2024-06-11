import express from "express";
import cors from "cors"; // Importar cors
import cotizacionRoutes from "./routes/cotizacion.routes.js";
import cpRoutes from "./routes/cp.routes.js";
import planesRoutes from "./routes/planes.routes.js";
import clientRoutes from "./routes/clients.routes.js";
import countryCodeRoutes from "./routes/countryCode.routes.js";
import cprRoutes from "./routes/cpr.routes.js";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

const app = express();

// Configurar CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3001", // Usar variable de entorno para el origen
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Usar cors con opciones

// Middlewares
app.use(express.json());

app.use(cotizacionRoutes);
app.use(cpRoutes);
app.use(planesRoutes);
app.use(clientRoutes);
app.use(countryCodeRoutes);
app.use(cprRoutes);

export default app;
