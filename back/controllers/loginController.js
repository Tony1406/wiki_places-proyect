import { loginModel } from "../models/loginModel.js";

export class loginController {
  static async login(req, res) {
    try {
      const resultUser = await loginModel.login(req);

      if (resultUser.usuario == null) {
        return res.json({
          message: "usuario no encontrado",
          usuario: resultUser.usuario,
        });
      }

      const passReq = req.body.password;
      const passDb = resultUser.usuario.password;

      if (passReq == passDb) {
        return res.json({
          message: "Clave correcta",
          usuario: resultUser.usuario,
        });
      } else {
        return res.json({
          message: "clave invalida",
          usuario: null,
        });
      }
    } catch (error) {
      // Maneja errores y envía una respuesta de error
      res.status(500).json({ message: "Error en el controlador", error });
    }
  }
}
