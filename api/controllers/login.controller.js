import { entrarService } from "../services/login.service.js";

export async function entrar(req, res) {
  const { l, s } = req.body;
  try {
    const login = await entrarService(l, s);
    // req.session.userId = user.id;
    res.json(login);
  } catch {
    res.status(500);
  }
}

export async function sair(req, res) {
  req.session.destroy();
  // res.send('Logout bem-sucedido!');
}
