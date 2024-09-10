import { lugarModel } from "../models/lugarModel.js";

export class lugarController {
  static async lugar(req, res) {
    try {
      const lugares = await lugarModel.lugar(req, res);

      if (lugares.length === 0) {
        return res.json({
          message: "No se encontraron lugares",
        });
      }
      return res.json(lugares);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
