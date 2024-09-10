import { ciudadModel } from "../models/ciudadModel.js";

export class ciudadController {
  static async ciudad(req, res) {
    try {
      const ciudades = await ciudadModel.ciudad(req, res);

      if (ciudades.length == 0) {
        return res.json({
          message: "No se encontraron ciudades",
        });
      }

      return res.json(ciudades);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
