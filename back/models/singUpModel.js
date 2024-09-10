import Usuario from "../entity/usuarioEntity.js";

export class singUpModel {
  static async singUp(req, res) {
    const { firstname, lastname, email, password } = req.body;
    try {
      const existingUser = await Usuario.findOne({
        where: { email: email },
      });

      if (existingUser) {
        return res.json({ message: "El usuario ya existe" });
      }

      const nuevoUsuario = await Usuario.create({
        firstname,
        lastname,
        email,
        password,
      });
      return {
        message: "Usuario registrado",
        Usuario: nuevoUsuario,
      };
    } catch (error) {
      res.status(500).json({ message: "Error al registrar el usuario", error });
    }
  }
}
