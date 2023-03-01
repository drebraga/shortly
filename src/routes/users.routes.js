import { Router } from "express";
import { singIn, singUp, getUser, getRanking } from "../controllers/users.controller.js";
import schemaValidate from "../middleware/schema.validation.js";
import { userSignUpSchema, userSignInSchema } from "../schemas/users.schema.js";
import checkUser from "../middleware/checkUser.middleware.js"
import checkToken from "../middleware/checkToken.middleware.js"

const userRouter = Router();

userRouter.get("/users/me", checkToken(), getUser);

userRouter.get("/ranking", getRanking);

userRouter.post("/signup", schemaValidate(userSignUpSchema), checkUser("singup"), singUp);

userRouter.post("/signin", schemaValidate(userSignInSchema), checkUser("singin"), singIn);

export default userRouter;