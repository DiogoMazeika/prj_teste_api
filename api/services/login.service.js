import { hashSync, compareSync } from "bcrypt";
import { cadastroUserDb } from "../data/login.db.js";

function saveSessao(req) {
  return new Promise((res, rej) => {
    req.session.save((err) => {
      if (err) return rej(err);

      res();
      return undefined;
    });
  });
}

export async function entrarService(login, s, req) {
  const userData = (await usuarioDb(login)).rows[0];
  // const userData = { id: 1, nome: "user", email: "email" };

  if (userData) {
    let { id, senha } = userData;
    if (compareSync(s, senha)) {
      // console.debug(id);
      // id = await bcrypt.hash(`${id}`, 10);
      // req.session.user = userData;
      // await saveSessao(req);
      return { ...userData, ok: true, id };
    }
  }

  return {
    message: "Senha ou Login incorretos",
  };
}

export async function sairService(req) {
  return new Promise((res, rej) => {
    req.session.destroy((e) => {
      if (e) return rej(e);
      return res();
    });
  });
}

export async function cadastroUserService({
  nome,
  email,
  dataNasc,
  telefone,
  senha,
}) {
  const s = hashSync(`${senha}`, 12);
  const [d, m, a] = `${dataNasc}`.split("/");
  console.debug(nome, email, dataNasc, telefone, s);
  await cadastroUserDb(nome, email, `${y}-${m}-${d}`, telefone, s);
  return true;
}
