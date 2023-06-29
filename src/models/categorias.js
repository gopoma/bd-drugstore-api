const { TableNames } = require('../config');
const { MySQL } = require('../helpers');

class CategoriaModel {
  static async getAll() {
    const categorias = await MySQL.getAll({
      tableName: TableNames.CATEGORIA,
    });

    return categorias;
  }

  static async get(cod) {
    const categoria = await MySQL.get({
      tableName: TableNames.CATEGORIA,
      cod,
    });

    return categoria;
  }

  static async create(data) {
    const categoria = await MySQL.create({
      tableName: TableNames.CATEGORIA,
      data,
    });

    return categoria;
  }

  static async edit(cod, data) {
    const categoria = await MySQL.edit({
      tableName: TableNames.CATEGORIA,
      cod,
      data,
    });

    return categoria;
  }

  static async delete(cod) {
    const categoria = await MySQL.delete({
      tableName: TableNames.CATEGORIA,
      cod,
    });

    return categoria;
  }
}

module.exports = CategoriaModel;
