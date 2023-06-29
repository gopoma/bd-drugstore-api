const { TableNames } = require('../config');
const { MySQL } = require('../helpers');

class RolModel {
  static async getAll() {
    const roles = await MySQL.getAll({
      tableName: TableNames.ROL,
    });

    return roles;
  }

  static async get(cod) {
    const rol = await MySQL.get({
      tableName: TableNames.ROL,
      cod,
    });

    return rol;
  }

  static async create(data) {
    const rol = await MySQL.create({
      tableName: TableNames.ROL,
      data,
    });

    return rol;
  }

  static async edit(cod, data) {
    const rol = await MySQL.edit({
      tableName: TableNames.ROL,
      cod,
      data,
    });

    return rol;
  }

  static async delete(cod) {
    const rol = await MySQL.delete({
      tableName: TableNames.ROL,
      cod,
    });

    return rol;
  }
}

module.exports = RolModel;
