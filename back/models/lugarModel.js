import Lugar from "../entity/lugarEntity.js";

export class lugarModel {
  static async lugar(req, res) {
    try {
      const { id_ciudad } = req.body;

      const listaLugares = await Lugar.findAll({
        where: { id_ciudad },
      });

      return res.json(listaLugares);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las ciudades", error });
    }
  }
}
