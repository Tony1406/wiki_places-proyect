import Pais from "../entity/paisEntity.js";

export class paisModel {
  static async pais(req, res) {
    try {
      const listaPaises = await Pais.findAll();

      console.log(listaPaises);

      return res.json(listaPaises);
    } catch (error) {
      // Manejo de errores
      res.status(500).json({ message: "Error al obtener los países", error });
    }
  }
}
