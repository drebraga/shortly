import { Router } from "express";

const urlRouter = Router();

urlRouter.get("/urls/:id");

urlRouter.get("/urls/open/:shortUrl");

urlRouter.post("/urls/shorten");

urlRouter.delete("/urls/:id");

export default urlRouter;