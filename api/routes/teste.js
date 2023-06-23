import { Router } from "express";
const router = Router();

import { controllerTeste } from "../controllers/teste.controller.js";

/* router.get((req, res, next) => {
  next();
}); */

// Rota GET para '/teste'
router.get("/aqui", controllerTeste);

export default router;
