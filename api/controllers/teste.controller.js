import { testeService } from "../services/teste.service.js";

export async function teste(req, res) {
  try{
    const data = await testeService()
    res.send(data);
  }catch (error){
    console.debug(error);
    res.status(500); // 418
  }
}
