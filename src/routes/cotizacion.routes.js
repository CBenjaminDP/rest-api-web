import { Router } from "express";
import {
  getCotizaciones,
  getOneCotizacion,
  createCotizacion,
  updateCotizacion,
  deleteCotizacion,
  findByEmailAndPhone
} from "../controllers/cotizacion.controller.js";

const router = Router();

router.get("/cotizacion", getCotizaciones);
router.get("/cotizacion/:id", getOneCotizacion);
router.post("/cotizacion", createCotizacion);
router.post("/cotizacion/findByEmailAndPhone", findByEmailAndPhone);
router.put("/cotizacion/:id", updateCotizacion);
router.delete("/cotizacion/:id", deleteCotizacion);

export default router;
