import { Router } from "express";
import jwtMiddleware from "../middlewares/jwtMiddleware.js";
import { getMarket, postIntoMarket, getAllPokemons, tradeFromMarket, getMyMarket, deleteFromMarket } from "../controllers/marketControllers.js";


const marketRouter = Router();

marketRouter.get("/market", jwtMiddleware, getMarket);
marketRouter.post("/market/:pokenumber/:pokeintent", jwtMiddleware, postIntoMarket);
marketRouter.post("/trade/:pokeintent/:pokeid", jwtMiddleware, tradeFromMarket);
marketRouter.get('/allpokemons', jwtMiddleware, getAllPokemons)
marketRouter.get("/mymarket", jwtMiddleware, getMyMarket);
marketRouter.delete("/mymarket/:id", jwtMiddleware, deleteFromMarket);

export default marketRouter;