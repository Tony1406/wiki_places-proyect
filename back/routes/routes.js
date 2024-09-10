import { Router } from "express";
import { loginController } from "../controllers/loginController.js";
import { singUpController } from "../controllers/singUpController.js";
import { paisController } from "../controllers/paisController.js";
import { ciudadController } from "../controllers/ciudadController.js";
import { lugarController } from "../controllers/lugarController.js";

const placesRouter = Router();

placesRouter.post("/login", loginController.login);
placesRouter.post("/signup", singUpController.singUp);
placesRouter.get("/pais", paisController.pais);
placesRouter.post("/ciudad", ciudadController.ciudad);
placesRouter.post("/lugar", lugarController.lugar);

export default placesRouter;
