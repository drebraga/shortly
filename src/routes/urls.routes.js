import { Router } from "express";
import { urlShorter } from "../controllers/urls.controller.js";
import checkToken from "../middleware/checkToken.middleware.js";
import { urlSchema } from "../schemas/urls.schema.js";
import schemaValidate from "../middleware/schema.validation.js";
import checkURL from "../middleware/checkUrl.middleware.js";

const urlRouter = Router();

urlRouter.get("/urls/:id");

urlRouter.get("/urls/open/:shortUrl");

urlRouter.post("/urls/shorten", 
    schemaValidate(urlSchema), 
    checkURL(), 
    checkToken(), 
    urlShorter);

urlRouter.delete("/urls/:id");

export default urlRouter;