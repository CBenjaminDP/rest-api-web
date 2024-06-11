import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const CPR = sequelize.define(
  "cpr",
  {
    id_propuesta: {   // este es el id en general de la tabla
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_prospecto: {    // Número de Prospecto este es ese
      type: DataTypes.INTEGER,
    },
    fifa: {  // y este es el 0052 y dependiendo la coonsulta
      type: DataTypes.STRING(255),
    },
    id_admin_entry: {   //ID Admin EntryPay el cuale es fijo siempre 0001
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
