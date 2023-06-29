const { TableNames } = require('../config');
const { MySQL } = require('../helpers');

class LaboratorioModel {
  static async getAll() {
    const laboratorios = await MySQL.getAll({
      tableName: TableNames.LABORATORIO,
    });

    return laboratorios;
  }

  static async get(cod) {
    const laboratorio = await MySQL.get({
      tableName: TableNames.LABORATORIO,
      cod,
    });

    return laboratorio;
  }

  static async create(data) {
    const laboratorio = await MySQL.create({
      tableName: TableNames.LABORATORIO,
      data,
    });

    return laboratorio;
  }

  static async edit(cod, data) {
    const laboratorio = await MySQL.edit({
      tableName: TableNames.LABORATORIO,
      cod,
      data,
    });

    return laboratorio;
  }

  static async delete(cod) {
    const laboratorio = await MySQL.delete({
      tableName: TableNames.LABORATORIO,
      cod,
    });

    return laboratorio;
  }
}

module.exports = LaboratorioModel;
