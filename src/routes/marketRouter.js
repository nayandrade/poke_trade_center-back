import { Router } from "express";
import jwtMiddleware from "../middlewares/jwtMiddleware.js";
import { getMarket, postIntoMarket, getAllPokemons } from "../controllers/marketControllers.js";


const marketRouter = Router();

marketRouter.get("/market", jwtMiddleware, getMarket);
marketRouter.post("/market/:pokenumber/:pokeintent", jwtMiddleware, postIntoMarket);
marketRouter.get('/allpokemons', jwtMiddleware, getAllPokemons)

export default marketRouter;