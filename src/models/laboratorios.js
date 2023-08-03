const { TableNames } = require('../config');
const { OracleDB } = require('../helpers');

class LaboratorioModel {
  static async getAll() {
    const laboratorios = await OracleDB.getAll({
      tableName: TableNames.LABORATORIO,
    });

    return laboratorios;
  }

  static async get(cod) {
    const laboratorio = await OracleDB.get({
      tableName: TableNames.LABORATORIO,
      cod,
    });

    return laboratorio;
  }

  static async create(data) {
    const laboratorio = await OracleDB.create({
      tableName: TableNames.LABORATORIO,
      data,
    });

    return laboratorio;
  }

  static async edit(cod, data) {
    const laboratorio = await OracleDB.edit({
      tableName: TableNames.LABORATORIO,
      cod,
      data,
    });

    return laboratorio;
  }

  static async delete(cod) {
    const laboratorio = await OracleDB.delete({
      tableName: TableNames.LABORATORIO,
      cod,
    });

    return laboratorio;
  }
}

module.exports = LaboratorioModel;
