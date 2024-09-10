import Lugar from "../entity/lugarEntity.js";

export class lugarModel {
  static async lugar(req, res) {
    try {
      const { id_ciudad } = req.body;

      const listaLugares = await Lugar.findAll({
        where: { id_ciudad },
      });

      if (listaLugares.length === 0) {
        return res.json({
          message: "No se encontraron lugares",
        });
      }

      return res.json(listaLugares);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los lugares", error });
    }
  }
}
