import { Router } from "express";
const router = Router();

import {
  cadastroUser,
  entrar,
  sair,
  userInfo,
} from "../controllers/login.controller.js";

// router.post("/entrar", entrar);
router.post("/entrar", entrar);

router.use(async (req, res, next) => {
  if (req.cookies.sessionId) {
    const id = parseInt(req.cookies.sessionId);
    req.session.user = id;
  }

  if (req.session.user === undefined) {
    res.status(401).json({ sessao: false });
  } else next();
});

router.get("/info", userInfo);
router.post("/cadastroUser", cadastroUser);
router.post("/sair", sair);

export default router;
