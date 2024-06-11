import express from "express";
import {
  getCprs,
  getOneCpr,
  createCpr,
  updateCpr,
  deleteCpr,
} from "../controllers/cpr.controller.js";

const router = express.Router();

// Obtener todas las propuestas de CPR
router.get("/cprs", getCprs);

// Obtener una propuesta de CPR por su id_propuesta
router.get("/cprs/:id", getOneCpr);

// Crear una nueva propuesta de CPR
router.post("/cprs", createCpr);

// Actualizar una propuesta de CPR existente
router.put("/cprs/:id", updateCpr);

// Eliminar una propuesta de CPR
router.delete("/cprs/:id", deleteCpr);

export default router;
