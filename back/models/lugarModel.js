import Lugar from "../entity/lugarEntity.js";

export class lugarModel {
  static async lugar(req, res) {
    const { id_ciudad } = req.body;
    try {
      const listaLugares = await Lugar.findAll({
        where: { id_ciudad },
      });
      console.log(listaLugares.length);

      return listaLugares;
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los lugares", error });
    }
  }
}
