import Ciudad from "../entity/ciudadEntity.js";

export class ciudadModel {
  static async ciudad(req, res) {
    try {
      const { id_pais } = req.body;

      const listaCiudades = await Ciudad.findAll({
        where: { id_pais },
      });

      if (listaCiudades.length === 0) {
        return res.json({
          message: "No se encontraron ciudades",
        });
      }

      return res.json(listaCiudades);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las ciudades", error });
    }
  }
}
