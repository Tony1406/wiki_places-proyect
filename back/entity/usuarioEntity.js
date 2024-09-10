import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Ajusta la ruta a tu configuración de Sequelize

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "usuario",
    schema: "public",
    timestamps: false, // Si no estás usando campos de timestamp como createdAt/updatedAt
  }
);

export default Usuario;
