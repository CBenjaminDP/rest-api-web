import { TiposDePlanes } from "../models/TiposPlanes.js";

// Obtener todos los planes
export const getPlanes = async (req, res) => {
  try {
    const planes = await TiposDePlanes.findAll();
    res.json(planes);
  } catch (error) {
    console.error("Error getting all plans:", error);
    res.status(500).json({ message: "Error getting all plans", error });
  }
};

// Obtener un plan por su id
export const getOnePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await TiposDePlanes.findByPk(id);
    if (plan) {
      res.json(plan);
    } else {
      res.status(404).json({ message: "Plan no encontrado" });
    }
  } catch (error) {
    console.error("Error obteniendo el plan:", error);
    res.status(500).json({ message: "Error obteniendo el plan", error });
  }
};

// Crear un nuevo plan
export const createPlan = async (req, res) => {
  try {
    const { nombre_plan } = req.body;

    // Verificar si ya existe un plan con el mismo nombre
    const existingPlan = await TiposDePlanes.findOne({
      where: { nombre_plan },
    });
    if (existingPlan) {
      return res.status(400).json({ message: "El nombre del plan ya existe" });
    }

    // Crear un nuevo plan
    const newPlan = await TiposDePlanes.create({
      nombre_plan,
    });

    res.json(newPlan);
  } catch (error) {
    console.error("Error creating plan:", error);
    res.status(500).json({ message: "Error creating plan", error });
  }
};

// Actualizar un plan existente
export const updatePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_plan } = req.body;

    const plan = await TiposDePlanes.findByPk(id);
    if (!plan) {
      return res.status(404).json({ message: "Plan no encontrado" });
    }

    plan.nombre_plan = nombre_plan || plan.nombre_plan;

    await plan.save();

    res.json(plan);
  } catch (error) {
    console.error("Error updating plan:", error);
    res.status(500).json({ message: "Error updating plan", error });
  }
};

// Eliminar un plan
export const deletePlan = async (req, res) => {
  try {
    const { id } = req.params;

    const plan = await TiposDePlanes.findByPk(id);
    if (!plan) {
      return res.status(404).json({ message: "Plan no encontrado" });
    }

    await plan.destroy();

    res.json({ message: "Plan eliminado exitosamente" });
  } catch (error) {
    console.error("Error deleting plan:", error);
    res.status(500).json({ message: "Error deleting plan", error });
  }
};
