import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const CP = sequelize.define(
  "cp",
  {
    d_codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    d_asenta: {
      type: DataTypes.STRING(255),
    },
    d_tipo_asenta: {
      type: DataTypes.STRING(255),
    },
    d_mnpio: {
      type: DataTypes.STRING(255),
    },
    d_estado: {
      type: DataTypes.STRING(255),
    },
    d_ciudad: {
      type: DataTypes.STRING(255),
    },
    d_cp: {
      type: DataTypes.STRING(255),
    },
    c_estado: {
      type: DataTypes.STRING(255),
    },
    c_oficina: {
      type: DataTypes.STRING(255),
    },
    c_cp: {
      type: DataTypes.STRING(255),
    },
    c_tipo_asenta: {
      type: DataTypes.STRING(255),
    },
    c_mnpio: {
      type: DataTypes.STRING(255),
    },
    id_asenta_cpcons: {
      type: DataTypes.STRING(255),
    },
    d_zona: {
      type: DataTypes.STRING(255),
    },
    c_cve_ciudad: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
