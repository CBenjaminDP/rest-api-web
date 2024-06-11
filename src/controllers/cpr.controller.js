import { CPR } from "../models/cpr.js";

// Obtener todas las propuestas de CPR
export const getCprs = async (req, res) => {
  try {
    const cprs = await CPR.findAll();
    res.json(cprs);
  } catch (error) {
    console.error("Error getting all CPRs:", error);
    res.status(500).json({ message: "Error getting all CPRs", error });
  }
};

// Obtener una propuesta de CPR por su id_propuesta
export const getOneCpr = async (req, res) => {
  try {
    const { id } = req.params;
    const cpr = await CPR.findByPk(id);
    if (cpr) {
      res.json(cpr);
    } else {
      res.status(404).json({ message: "CPR no encontrado" });
    }
  } catch (error) {
    console.error("Error obteniendo el CPR:", error);
    res.status(500).json({ message: "Error obteniendo el CPR", error });
  }
};

// Crear una nueva propuesta de CPR
export const createCpr = async (req, res) => {
  try {
    const { id_propuesta, id_prospecto, fifa, id_admin_entry } = req.body;

    const newCpr = await CPR.create({
      id_propuesta,
      id_prospecto,
      fifa,
      id_admin_entry,
    });

    res.json(newCpr);
  } catch (error) {
    console.error("Error creating CPR:", error);
    res.status(500).json({ message: "Error creating CPR", error });
  }
};

// Crear una nueva propuesta de CPR
export const createCprI = async ({ id_propuesta, id_prospecto, fifa, id_admin_entry }, transaction) => {
  try {
    const newCpr = await CPR.create({
      id_propuesta,
      id_prospecto,
      fifa,
      id_admin_entry,
    }, { transaction });

    return newCpr;
  } catch (error) {
    console.error("Error creating CPR:", error);
    throw error;
  }
};

// Actualizar una propuesta de CPR existente
export const updateCpr = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_prospecto, fifa, id_admin_entry } = req.body;

    const cpr = await CPR.findByPk(id);
    if (!cpr) {
      return res.status(404).json({ message: "CPR no encontrado" });
    }

    cpr.id_prospecto = id_prospecto || cpr.id_prospecto;
    cpr.fifa = fifa || cpr.fifa;
    cpr.id_admin_entry = id_admin_entry || cpr.id_admin_entry;

    await cpr.save();

    res.json(cpr);
  } catch (error) {
    console.error("Error updating CPR:", error);
    res.status(500).json({ message: "Error updating CPR", error });
  }
};

// Eliminar una propuesta de CPR
export const deleteCpr = async (req, res) => {
  try {
    const { id } = req.params;

    const cpr = await CPR.findByPk(id);
    if (!cpr) {
      return res.status(404).json({ message: "CPR no encontrado" });
    }

    await cpr.destroy();

    res.json({ message: "CPR eliminado exitosamente" });
  } catch (error) {
    console.error("Error deleting CPR:", error);
    res.status(500).json({ message: "Error deleting CPR", error });
  }
};
