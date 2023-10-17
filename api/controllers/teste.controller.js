import { testeService } from "../services/teste.service.js";

export function testeController(req, res) {
  try{
    const data = testeService()
    res.send(data);
  }catch{
    res.status(500); // 418
  }
}
