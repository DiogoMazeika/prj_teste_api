import { entrarService } from "../services/login.service";

export async function entrar(req, res) {
    const { l, s } = req.body;
  try{
    const login = await entrarService(l, s)
    res.json(login);
  }catch{
    res.status(500);
  }
}
