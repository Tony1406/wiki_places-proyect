import { loginModel } from "../models/loginModel.js";

export class loginController {
  static async login(req, res) {
    try {
      // Llama al método del modelo
      console.log("entrando en el loginModel");
      const resultUser = await loginModel.login(req);
      console.log("resultUser : " + JSON.stringify(resultUser));

      if (resultUser.usuario == null) {
        return res.json({
          message: "usuario no encontrado",
          usuario: resultUser.usuario,
        });
      }

      const passReq = req.body.password;
      console.log("passReq : " + passReq);
      const passDb = resultUser.usuario.password;
      console.log("passDb : " + passDb);

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
