import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Ciudad from "./ciudadEntity.js";

const Lugar = sequelize.define(
  "Lugar",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre_lugar: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    imagen_lugar: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    descripcion_lugar: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    id_ciudad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Ciudad, // Hace referencia al modelo `Ciudad`
        key: "id",
      },
    },
  },
  {
    tableName: "lugar",
    schema: "public",
    timestamps: false,
  }
);

export default Lugar;
