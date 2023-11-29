import { Router } from "express";
const router = Router();

import { entrar, sair, userInfo } from "../controllers/login.controller.js";

// router.post("/entrar", entrar);
router.get("/entrar", entrar);

router.use(async (req, res, next) => {
  console.debug(req.session);
  if(req.session.user === undefined) {
    res.status(401).json({ sessao: false });
  } else next();
});

router.get("/info", userInfo);
// router.post("/sair", sair);

export default router;
