import { Router } from "express";
import { placesController } from "../controllers/controller.js";

const placesRouter = Router();

placesRouter.get("/login", placesController.loginController);
placesRouter.post("/signup", placesController.singUpController);
placesRouter.get("/pais", placesController.paisController);
placesRouter.get("/ciudad", placesController.ciudadController);
placesRouter.get("/lugar", placesController.lugarController);

export default placesRouter;
