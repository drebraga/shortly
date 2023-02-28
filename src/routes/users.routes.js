import { Router } from "express";
import { singIn, singUp } from "../controllers/users.controller.js";
import schemaValidate from "../middleware/schema.validation.js";
import { userSignUpSchema, userSignInSchema } from "../schemas/users.schema.js";
import checkUser from "../middleware/checkUser.middleware.js"

const userRouter = Router();

userRouter.get("/users/me");

userRouter.get("/ranking");

userRouter.post("/signup", schemaValidate(userSignUpSchema), singUp);

userRouter.post("/signin", schemaValidate(userSignInSchema), checkUser("singIn"), singIn);

export default userRouter;