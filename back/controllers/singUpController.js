import { singUpModel } from "../models/singUpModel.js";

export class singUpController {
  static async singUp(req, res) {
    try {
      return singUpModel.singUp(req);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
