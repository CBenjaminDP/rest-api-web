import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Clientes = sequelize.define(
  "clientes",
  {
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
    },
    apellidos: {
      type: DataTypes.STRING(255),
    },
    direccion: {
      type: DataTypes.STRING(255),
    },
    localidad: {
      type: DataTypes.STRING(255),
    },
    cp: {
      type: DataTypes.STRING(255),
    },
    numero_telefonico: {
      type: DataTypes.STRING(20),
    },
    correo: {
      type: DataTypes.STRING(255),
    },
    tipo_de_plan: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING(50),
    },
    tipo_de_socio: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
