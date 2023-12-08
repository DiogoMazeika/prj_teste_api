import { pool } from "./db.js";

export function usuarioDb(login) {
  return pool.query(`select * from usuario where email = $1`, [login]);
}

export function cadastroUserDb(nome, email, dataNasc, telefone, senha) {
  return pool.query(
    `
    insert into usuario
    (
      nome,
      email,
      data_nasc,
      celular,
      tipo_usuario_id,
      senha
    ) values
    (
      $1,
      $2,
      $3,
      $4,
      1,
      $5
    ) returning id  
    `,
    [nome, email, dataNasc, telefone, senha]
  );
}
