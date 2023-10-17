import { Router } from "express";
const router = Router();

import { testeController } from "../controllers/teste.controller.js";

/* router.get((req, res, next) => {
  next();
}); */

// Rota GET para '/teste'
router.get("/aqui", testeController);

export default router;
