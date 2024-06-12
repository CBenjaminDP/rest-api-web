import { CP } from "../models/Cp.js";

// Obtener todos los códigos postales
export const getCps = async (req, res) => {
  try {
    const cps = await CP.findAll();
    res.json(cps);
  } catch (error) {
    console.error("Error getting all cps:", error);
    res.status(500).json({ message: "Error getting all cps", error });
  }
};

// Crear un nuevo código postal
export const createCp = async (req, res) => {
  try {
    const {
      d_codigo,
      d_asenta,
      d_tipo_asenta,
      D_mnpio,
      d_estado,
      d_cuidad,
      d_CP,
      c_estado,
      c_oficina,
      c_CP,
      c_tipo_asent,
      c_mnpio,
      id_asenta_cpcons,
      d_zona,
      c_cve_cuidad,
    } = req.body;

    const newCp = await CP.create({
      d_codigo,
      d_asenta,
      d_tipo_asenta,
      D_mnpio,
      d_estado,
      d_cuidad,
      d_CP,
      c_estado,
      c_oficina,
      c_CP,
      c_tipo_asent,
      c_mnpio,
      id_asenta_cpcons,
      d_zona,
      c_cve_cuidad,
    });

    res.json(newCp);
  } catch (error) {
    console.error("Error creating cp:", error);
    res.status(500).json({ message: "Error creating cp", error });
  }
};

// Actualizar un código postal existente
export const updateCp = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      d_asenta,
      d_tipo_asenta,
      D_mnpio,
      d_estado,
      d_cuidad,
      d_CP,
      c_estado,
      c_oficina,
      c_CP,
      c_tipo_asent,
      c_mnpio,
      id_asenta_cpcons,
      d_zona,
      c_cve_cuidad,
    } = req.body;

    const cp = await CP.findByPk(id);
    if (!cp) {
      return res.status(404).json({ message: "Código postal no encontrado" });
    }

    cp.d_asenta = d_asenta || cp.d_asenta;
    cp.d_tipo_asenta = d_tipo_asenta || cp.d_tipo_asenta;
    cp.D_mnpio = D_mnpio || cp.D_mnpio;
    cp.d_estado = d_estado || cp.d_estado;
    cp.d_cuidad = d_cuidad || cp.d_cuidad;
    cp.d_CP = d_CP || cp.d_CP;
    cp.c_estado = c_estado || cp.c_estado;
    cp.c_oficina = c_oficina || cp.c_oficina;
    cp.c_CP = c_CP || cp.c_CP;
    cp.c_tipo_asent = c_tipo_asent || cp.c_tipo_asent;
    cp.c_mnpio = c_mnpio || cp.c_mnpio;
    cp.id_asenta_cpcons = id_asenta_cpcons || cp.id_asenta_cpcons;
    cp.d_zona = d_zona || cp.d_zona;
    cp.c_cve_cuidad = c_cve_cuidad || cp.c_cve_cuidad;

    await cp.save();

    res.json(cp);
  } catch (error) {
    console.error("Error updating cp:", error);
    res.status(500).json({ message: "Error updating cp", error });
  }
};

// Eliminar un código postal
export const deleteCp = async (req, res) => {
  try {
    const { id } = req.params;

    const cp = await CP.findByPk(id);
    if (!cp) {
      return res.status(404).json({ message: "Código postal no encontrado" });
    }

    await cp.destroy();

    res.json({ message: "Código postal eliminado exitosamente" });
  } catch (error) {
    console.error("Error deleting cp:", error);
    res.status(500).json({ message: "Error deleting cp", error });
  }
};

// Buscar un código postal por d_codigo
export const findByCodigo = async (req, res) => {
  try {
    const { d_codigo } = req.params;
    console.log(d_codigo);
    const cp = await CP.findOne({
      where: {
        d_codigo,
      },
    });
    if (cp) {
      res.json({ message: "SI existe código" });
    } else {
      res.json({ message: "No existe código" });
    }
  } catch (error) {
    console.error("Error buscando el código postal:", error);
    res.status(500).json({ message: "Error buscando el código postal", error });
  }
};
