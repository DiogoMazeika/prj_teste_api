import { entrarService, sairService } from "../services/login.service.js";

export async function entrar(req, res) {
  const { l, s } = req.body;
  try {
    const login = await entrarService(l, s);

    if(login.ok) {
      res.json(login);
      req.session.user = { id: 1, nome: 'user', email: 'email' };
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

export async function sair(req, res) {
  try {
    await sairService(req);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
