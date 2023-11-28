export async function entrarService(login, senha) {
  const userData = {};
  return { ...userData, ok: true };

  return {
    message: "Senha ou Login incorretos",
  };
}
