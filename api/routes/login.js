import { Router } from "express";
const router = Router();

import { entrar } from "../controllers/login.controller.js";

router.post("/entrar", entrar);

/* router.get((req, res, next) => {
  next();
}); */

export default router;
