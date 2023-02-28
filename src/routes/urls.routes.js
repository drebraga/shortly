import { Router } from "express";
import { urlShorter } from "../controllers/urls.controller.js";

const urlRouter = Router();

urlRouter.get("/urls/:id");

urlRouter.get("/urls/open/:shortUrl");

urlRouter.post("/urls/shorten", urlShorter);

urlRouter.delete("/urls/:id");

export default urlRouter;