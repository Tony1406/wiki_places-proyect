import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export class placesModel {
  static async login(req, res) {
    try {
    } catch (error) {}
  }
  static async singUpModel(req, res) {
    try {
    } catch (error) {}
  }

  static async paisModel(req, res) {
    try {
    } catch (error) {}
  }

  static async ciudadModel(req, res) {
    try {
    } catch (error) {}
  }

  static async lugarModel(req, res) {
    try {
    } catch (error) {}
  }
}
const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
