import { Router } from "express";
import {
  getCps,
  createCp,
  updateCp,
  deleteCp,
  findByCodigo
} from "../controllers/cp.controller.js";

const router = Router();

router.get("/cp", getCps);
router.get("/cp/:id_cp", findByCodigo);
router.post("/cp", createCp);
router.put("/cp/:id", updateCp);
router.delete("/cp/:id", deleteCp);


export default router;
