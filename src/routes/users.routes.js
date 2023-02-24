import { Router } from "express";

const userRouter = Router();

userRouter.get("/users/me");

userRouter.get("/ranking");

userRouter.post("/signup");

userRouter.post("/signin");

export default userRouter;