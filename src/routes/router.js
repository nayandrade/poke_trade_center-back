import { Router } from "express";
import authRouter from "./authRouter.js";
import pokedexRouter from "./pokedexRouter.js";
import imageRouter from "./imageRouter.js";
import homeRouter from "./homeRouter.js";

const router = Router();

router.use(authRouter);
router.use(pokedexRouter);
router.use(imageRouter)
router.use(homeRouter)

export default router;
