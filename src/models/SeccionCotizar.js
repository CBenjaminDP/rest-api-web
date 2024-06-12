import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const SeccionCotizar = sequelize.define(
  "seccion_cotizar",
  {
    id_prospecto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: {
      type: DataTypes.STRING(255),
    },
    apellidos: {
      type: DataTypes.STRING(255),
    },
    numero_telefonico: {
      type: DataTypes.STRING(20),
    },
    correo_electronico: {
      type: DataTypes.STRING(255),
    },
    fifa: {
      type: DataTypes.STRING(255),
    },
    cp: {
      type: DataTypes.INTEGER,
    },
    tipo_de_plan: {
      type: DataTypes.INTEGER,
    },
    numero_usuarios: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
