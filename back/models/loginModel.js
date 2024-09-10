import Usuario from "../entity/usuarioEntity.js";

export class loginModel {
  static async login(req, res) {
    const { email, password } = req.body;
    console.log("email " + email + " pass " + password);
    try {
      const usuario = await Usuario.findOne({
        where: {
          email: email,
        },
      });

      return {
        usuario: usuario,
      };
    } catch (error) {
      res.status(500).json({ message: "Error al hacer select" });
    }
  }
}
