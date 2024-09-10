import Ciudad from "../entity/ciudadEntity.js";

export class ciudadModel {
  static async ciudad(req, res) {
    const { id_pais } = req.body;
    try {
      const listaCiudades = await Ciudad.findAll({
        where: { id_pais },
      });
      console.log(listaCiudades.length);

      return listaCiudades;
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las ciudades", error });
    }
  }
}
