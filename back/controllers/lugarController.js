import { lugarModel } from "../models/lugarModel.js";

export class lugarController {
  static async lugar(req, res) {
    try {
      return lugarModel.lugar(req, res);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
