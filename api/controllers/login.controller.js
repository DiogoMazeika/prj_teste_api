import {
  cadastroUserService,
  entrarService,
  sairService,
} from "../services/login.service.js";

export async function entrar(req, res) {
  const { l, s } = req.body;
  try {
    const login = await entrarService(l, s, req);

    if (login.ok) {
      res.cookie("sessionId", login.id, { httpOnly: true });
      res.status(200).json(login);
    } else {
      res.status(401).json(login.message);
    }
  } catch {
    res.status(500);
  }
}

export async function userInfo(req, res) {
  res.json(req.session.user);
}

export async function cadastroUser(req, res) {
  try {
    await cadastroUserService(req.query);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}

export async function sair(req, res) {
  try {
    await sairService(req);
    res.clearCookie("sessionId").sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
