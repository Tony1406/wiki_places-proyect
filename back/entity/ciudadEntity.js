import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Pais from "./paisEntity.js";

const Ciudad = sequelize.define(
  "Ciudad",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre_ciudad: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    id_pais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Pais, // Hace referencia al modelo `Pais`
        key: "id",
      },
    },
  },
  {
    tableName: "ciudad",
    schema: "public",
    timestamps: false,
  }
);

export default Ciudad;
