export async function entrarService(login, senha) {
  const userData = {};
  return { ...userData, ok: true };

  return {
    message: "Senha ou Login incorretos",
  };
}

export async function sairService(req) {
  return new Promise((res, rej) => {
    req.session.destroy((e) => {
      if(e) return rej(e);
      return res();
    });
  });
}