const { TableNames } = require('../config');
const connection = require('../db/connection');
const { MySQL } = require('../helpers');

class UsuarioModel {
  static async getAll() {
    const [usuarios] = await connection.query({
      sql: `SELECT
      UsuCod, UsuNom, UsuApe,
      RolDes AS UsuRol,
      UsuEma, UsuTel, UsuDir,
      UsuFecInsAño, UsuFecInsMes, UsuFecInsDia,
      UsuEstReg
      FROM GZM_USUARIO
      JOIN GZZ_ROL ON GZM_USUARIO.RolCod=GZZ_ROL.RolCod
      ORDER BY UsuCod DESC`,
    });

    return usuarios;
  }

  static async get(cod) {
    const [[usuario]] = await connection.query({
      sql: `SELECT
      UsuCod, UsuNom, UsuApe,
      RolDes AS UsuRol,
      UsuEma, UsuTel, UsuDir,
      UsuFecInsAño, UsuFecInsMes, UsuFecInsDia,
      UsuEstReg
      FROM GZM_USUARIO
      JOIN GZZ_ROL ON GZM_USUARIO.RolCod=GZZ_ROL.RolCod
      WHERE UsuCod=?`,
      values: [cod],
    });
    return usuario;
  }

  static async create(data) {
    const usuario = await MySQL.create({
      tableName: TableNames.USUARIO,
      data,
    });

    return usuario;
  }

  static async edit(cod, data) {
    const usuario = await MySQL.edit({
      tableName: TableNames.USUARIO,
      cod,
      data,
    });

    return usuario;
  }

  static async delete(cod) {
    const usuario = await MySQL.delete({
      tableName: TableNames.USUARIO,
      cod,
    });

    return usuario;
  }
}

module.exports = UsuarioModel;
