import { ciudadModel } from "../models/ciudadModel.js";

export class ciudadController {
  static async ciudad(req, res) {
    try {
      return ciudadModel.ciudad(req, res);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
