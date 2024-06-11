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
    D_mnpio: {
      type: DataTypes.STRING(255),
    },
    d_estado: {
      type: DataTypes.STRING(255),
    },
    d_cuidad: {
      type: DataTypes.STRING(255),
    },
    d_CP: {
      type: DataTypes.STRING(255),
    },
    c_estado: {
      type: DataTypes.STRING(255),
    },
    c_oficina: {
      type: DataTypes.STRING(255),
    },
    c_CP: {
      type: DataTypes.STRING(255),
    },
    c_tipo_asent: {
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
    c_cve_cuidad: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: false,
  }
);
