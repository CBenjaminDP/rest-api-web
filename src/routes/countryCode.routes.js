import express from "express";
import {
  getCountryCodes,
  getOneCountryCode,
  createCountryCode,
  updateCountryCode,
  deleteCountryCode,
} from "../controllers/countryCode.controller.js";

const router = express.Router();

// Obtener todos los códigos de país
router.get("/country-codes", getCountryCodes);

// Obtener un código de país por su FIFA
router.get("/country-codes/:FIFA", getOneCountryCode);

// Crear un nuevo código de país
router.post("/country-codes", createCountryCode);

// Actualizar un código de país existente
router.put("/country-codes/:FIFA", updateCountryCode);

// Eliminar un código de país
router.delete("/country-codes/:FIFA", deleteCountryCode);

export default router;
