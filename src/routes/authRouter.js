import { Router } from "express";
import { signup, signin } from "../controllers/authControllers.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { signupSchema, signinSchema } from "../schemas/schemas.js"

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(signupSchema), signup);
authRouter.post("/signin", validateSchemaMiddleware(signinSchema), signin);

export default authRouter;