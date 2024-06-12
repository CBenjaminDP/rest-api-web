import { SeccionCotizar } from "../models/SeccionCotizar.js";
import { createCprI } from "../controllers/cpr.controller.js";
import { getOneCountryCode } from "../controllers/countryCode.controller.js";
import { sequelize } from "../database/database.js";
import { Op } from "sequelize";

// Obtener todas las cotizaciones
export const getCotizaciones = async (req, res) => {
  try {
    const cotizaciones = await SeccionCotizar.findAll();
    res.json(cotizaciones);
  } catch (error) {
    console.error("Error getting all:", error);
    res.status(500).json({ message: "Error getting all", error });
  }
};

// Obtener una cotización por su id
export const getOneCotizacion = async (req, res) => {
  try {
    const { id } = req.params;
    const cotizacion = await SeccionCotizar.findByPk(id);
    if (cotizacion) {
      res.json(cotizacion);
    } else {
      res.status(404).json({ message: "Cotización no encontrada" });
    }
  } catch (error) {
    console.error("Error obteniendo la cotización:", error);
    res.status(500).json({ message: "Error obteniendo la cotización", error });
  }
};

// Variable global para mantener el contador
let currentNumber = 1;

// Obtener el siguiente número secuencial
const getNextFormattedNumber = () => {
  const formattedNumber = String(currentNumber).padStart(4, "0");
  currentNumber += 1;
  return formattedNumber;
};

// Crear una nueva cotización
export const createCotizacion = async (req, res) => {
  const t = await sequelize.transaction();
  // Obtener el siguiente número secuencial
  const id_prospecto = getNextFormattedNumber();
  try {
    const {
      nombres,
      apellidos,
      numero_telefonico,
      correo_electronico,
      fifa,
      cp,
      tipo_de_plan,
      numero_usuarios,
      status,
    } = req.body;

    // Insertar en la tabla SeccionCotizar
    const newSeccionCotizar = await SeccionCotizar.create(
      {
        id_prospecto,
        nombres,
        apellidos,
        numero_telefonico,
        correo_electronico,
        fifa,
        cp,
        tipo_de_plan,
        numero_usuarios,
        status,
      },
      { transaction: t }
    );

    // Insertar en la tabla CPR
    console.log(newSeccionCotizar);
    console.log(id_prospecto);

    const newCpr = await createCprI(
      {
        id_propuesta: newSeccionCotizar.id_prospecto,
        id_prospecto: id_prospecto,
        fifa: "0052",
        id_admin_entry: "0001", // O cualquier otro valor relevante
      },
      t
    );

    // Confirmar la transacción
    await t.commit();

    res.json({ newSeccionCotizar, newCpr });
  } catch (error) {
    // Deshacer la transacción en caso de error
    await t.rollback();

    console.error("Error creating cotizacion and CPR:", error);
    res
      .status(500)
      .json({ message: "Error creating cotizacion and CPR", error });
  }
};
// Actualizar una cotización existente
export const updateCotizacion = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      Nombres,
      Apellidos,
      numero_telefonico,
      correo_electronico,
      pais,
      status,
      CP,
      tipo_de_plan,
    } = req.body;

    const cotizacion = await SeccionCotizar.findByPk(id);
    if (!cotizacion) {
      return res.status(404).json({ message: "Cotización no encontrada" });
    }

    cotizacion.Nombres = Nombres || cotizacion.Nombres;
    cotizacion.Apellidos = Apellidos || cotizacion.Apellidos;
    cotizacion.numero_telefonico =
      numero_telefonico || cotizacion.numero_telefonico;
    cotizacion.correo_electronico =
      correo_electronico || cotizacion.correo_electronico;
    cotizacion.pais = pais || cotizacion.pais;
    cotizacion.status = status || cotizacion.status;
    cotizacion.CP = CP || cotizacion.CP;
    cotizacion.tipo_de_plan = tipo_de_plan || cotizacion.tipo_de_plan;

    await cotizacion.save();

    res.json(cotizacion);
  } catch (error) {
    console.error("Error updating cotizacion:", error);
    res.status(500).json({ message: "Error updating cotizacion", error });
  }
};

export const findByEmailAndPhone = async (req, res) => {
  try {
    const { numero_telefonico, correo_electronico } = req.body;

    const cotizacion = await SeccionCotizar.findOne({
      where: {
        [Op.or]: [{ numero_telefonico }, { correo_electronico }],
      },
    });

    if (cotizacion) {
      if (cotizacion.status) {
        res.json({ message: "Cotización encontrada", cotizacion });
      } else {
        res.json({ message: "Cotización no encontrada" });
      }
    } else {
      res.json({ message: "Cotización no encontrada" });
    }
  } catch (error) {
    console.error("Error finding cotizacion:", error);
    res.status(500).json({ message: "Error finding cotizacion", error });
  }
};

// Eliminar una cotización
export const deleteCotizacion = async (req, res) => {
  try {
    const { id } = req.params;

    const cotizacion = await SeccionCotizar.findByPk(id);
    if (!cotizacion) {
      return res.status(404).json({ message: "Cotización no encontrada" });
    }

    await cotizacion.destroy();

    res.json({ message: "Cotización eliminada exitosamente" });
  } catch (error) {
    console.error("Error deleting cotizacion:", error);
    res.status(500).json({ message: "Error deleting cotizacion", error });
  }
};
