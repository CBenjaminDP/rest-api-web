import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Clientes = sequelize.define(
  "clientes",
  {
    ID_CLIENTE: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMBRE: {
      type: DataTypes.STRING(255),
    },
    APELLIDOS: {
      type: DataTypes.STRING(255),
    },
    DIRECCION: {
      type: DataTypes.STRING(255),
    },
    LOCALIDAD: {
      type: DataTypes.STRING(255),
    },
    id_cp: {
      type: DataTypes.INTEGER,
    },
    NUMERO_TELEFONO: {
      type: DataTypes.STRING(20),
    },
    CORREO: {
      type: DataTypes.STRING(255),
    },
    TIPO_DE_PLAN: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
  }
);
