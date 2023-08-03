const { TableNames } = require('../config');
const { OracleDB } = require('../helpers');

class RolModel {
  static async getAll() {
    const roles = await OracleDB.getAll({
      tableName: TableNames.ROL,
    });

    return roles;
  }

  static async get(cod) {
    const rol = await OracleDB.get({
      tableName: TableNames.ROL,
      cod,
    });

    return rol;
  }

  static async create(data) {
    const rol = await OracleDB.create({
      tableName: TableNames.ROL,
      data,
    });

    return rol;
  }

  static async edit(cod, data) {
    const rol = await OracleDB.edit({
      tableName: TableNames.ROL,
      cod,
      data,
    });

    return rol;
  }

  static async delete(cod) {
    const rol = await OracleDB.delete({
      tableName: TableNames.ROL,
      cod,
    });

    return rol;
  }
}

module.exports = RolModel;
