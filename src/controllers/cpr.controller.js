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

// Obtener una propuesta de CPR por su id_prospecto
export const getOneCprByProspecto = async (req, res) => {
  try {
    const { id_prospecto } = req.params;
    const cpr = await CPR.findOne({ where: { id_prospecto: id_prospecto } });
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

// Actualizar una propuesta de CPR existente
export const updateCpr = async (req, res) => {
  try {
    const { id_prospecto } = req.params; // Obtener el id_prospecto del parámetro de la URL
    const { fifa, id_admin_entry } = req.body; // Obtener los datos del cuerpo de la solicitud

    // Buscar el CPR por id_prospecto
    const cpr = await CPR.findOne({ where: { id_prospecto } });
    if (!cpr) {
      return res.status(404).json({ message: "CPR no encontrado" });
    }

    // Actualizar los campos del CPR con los valores proporcionados en el cuerpo de la solicitud
    cpr.fifa = fifa !== undefined ? fifa : cpr.fifa;
    cpr.id_admin_entry =
      id_admin_entry !== undefined ? id_admin_entry : cpr.id_admin_entry;

    // Guardar los cambios en la base de datos
    await cpr.save();

    // Enviar la respuesta con el CPR actualizado
    res.json(cpr);
  } catch (error) {
    console.error("Error updating CPR:", error);
    res.status(500).json({ message: "Error updating CPR", error });
  }
};

// Eliminar una propuesta de CPR
export const deleteCpr = async (req, res) => {
  try {
    const { id_prospecto } = req.params;

    const cpr = await CPR.findOne({ where: { id_prospecto } });
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
