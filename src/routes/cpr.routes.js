import express from "express";
import {
  getCprs,
  getOneCprByProspecto,
  createCpr,
  updateCpr,
  deleteCpr,
} from "../controllers/cpr.controller.js";

const router = express.Router();

// Obtener todas las propuestas de CPR
router.get("/cprs", getCprs);

// Obtener una propuesta de CPR por su id_propuesta
router.get("/cprs/:id_prospecto", getOneCprByProspecto);

// Crear una nueva propuesta de CPR
router.post("/cprs", createCpr);

// Actualizar una propuesta de CPR existente
router.put("/cprs/:id_prospecto", updateCpr);

// Eliminar una propuesta de CPR
router.delete("/cprs/:id_prospecto", deleteCpr);

export default router;
