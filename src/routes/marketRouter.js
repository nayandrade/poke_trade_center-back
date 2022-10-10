import { Router } from "express";
import jwtMiddleware from "../middlewares/jwtMiddleware.js";
import { getMarket, postIntoMarket, getAllPokemons, tradeFromMarket, getMyMarket } from "../controllers/marketControllers.js";


const marketRouter = Router();

marketRouter.get("/market", jwtMiddleware, getMarket);
marketRouter.post("/market/:pokenumber/:pokeintent", jwtMiddleware, postIntoMarket);
marketRouter.post("/trade/:pokeintent/:pokeid", jwtMiddleware, tradeFromMarket);
marketRouter.get('/allpokemons', jwtMiddleware, getAllPokemons)
marketRouter.get("/mymarket", jwtMiddleware, getMyMarket);

export default marketRouter;