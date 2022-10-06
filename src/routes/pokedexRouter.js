import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { signupSchema, signinSchema } from "../schemas/schemas.js"
import jwtMiddleware from "../middlewares/jwtMiddleware.js";
import { getMyPokedex } from "../controllers/pokedexController.js";

const pokedexRouter = Router();

pokedexRouter.get("/pokedex", jwtMiddleware, getMyPokedex);

export default pokedexRouter;