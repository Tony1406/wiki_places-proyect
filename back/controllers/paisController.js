import { paisModel } from "../models/paisModel.js";

export class paisController {
  static async pais(req, res) {
    try {
      return paisModel.pais(req, res);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
