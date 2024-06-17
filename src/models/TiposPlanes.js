import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TiposDePlanes = sequelize.define(
  "tipos_de_planes",
  {
    id_plan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_del_plan: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
