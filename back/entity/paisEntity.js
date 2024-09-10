import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Asegúrate de ajustar la ruta según tu configuración

const Pais = sequelize.define(
  "Pais",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre_pais: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "pais",
    schema: "public",
    timestamps: false, // Desactiva createdAt y updatedAt si no los usas
  }
);

export default Pais;
