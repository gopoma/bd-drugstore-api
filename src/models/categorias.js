const { TableNames } = require('../config');
const { OracleDB } = require('../helpers');

class CategoriaModel {
  static async getAll() {
    const categorias = await OracleDB.getAll({
      tableName: TableNames.CATEGORIA,
    });

    return categorias;
  }

  static async get(cod) {
    const categoria = await OracleDB.get({
      tableName: TableNames.CATEGORIA,
      cod,
    });

    return categoria;
  }

  static async create(data) {
    const categoria = await OracleDB.create({
      tableName: TableNames.CATEGORIA,
      data,
    });

    return categoria;
  }

  static async edit(cod, data) {
    const categoria = await OracleDB.edit({
      tableName: TableNames.CATEGORIA,
      cod,
      data,
    });

    return categoria;
  }

  static async delete(cod) {
    const categoria = await OracleDB.delete({
      tableName: TableNames.CATEGORIA,
      cod,
    });

    return categoria;
  }
}

module.exports = CategoriaModel;
