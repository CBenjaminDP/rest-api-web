import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const CPR = sequelize.define(
  "cpr",
  {
    id_propuesta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_prospecto: {
      type: DataTypes.INTEGER,
    },
    fifa: {
      type: DataTypes.STRING(255),
    },
    id_admin_entry: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
