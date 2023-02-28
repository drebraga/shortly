import { Router } from "express";
import { urlShorter, getUrlById, deleteUrlById } from "../controllers/urls.controller.js";
import checkToken from "../middleware/checkToken.middleware.js";
import { urlSchema } from "../schemas/urls.schema.js";
import schemaValidate from "../middleware/schema.validation.js";
import checkURL from "../middleware/checkUrl.middleware.js";
import checkShort from "../middleware/checkShort.middleware.js";

const urlRouter = Router();

urlRouter.get("/urls/:id", getUrlById);

urlRouter.get("/urls/open/:shortUrl");

urlRouter.post("/urls/shorten",
    schemaValidate(urlSchema),
    checkURL(),
    checkToken(),
    urlShorter);

urlRouter.delete("/urls/:id", checkToken(), checkShort(), deleteUrlById);

export default urlRouter;