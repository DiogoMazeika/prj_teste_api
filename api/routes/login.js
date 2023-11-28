import { Router } from "express";
const router = Router();

import { entrar, sair } from "../controllers/login.controller.js";

router.post("/entrar", entrar);

/* router.get((req, res, next) => {
  next();
}); */

router.post("/sair", sair);

export default router;
